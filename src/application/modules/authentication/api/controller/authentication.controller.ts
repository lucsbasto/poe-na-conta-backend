import { IGetMeUseCase } from '@/domain/authentication/interfaces/usecases/get-me';
import { ISignInUseCase } from '@/domain/authentication/interfaces/usecases/sign-in';
import { Body, Controller, Get, Inject, Post, Req, Res, UseGuards, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { Request, Response } from 'express';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import { SignInInputDto } from '../dtos/login.dto';
import { SignInResponseDto } from '../dtos/response.dto';

@ApiTags('auth')
@ApiBadRequestResponse({ description: 'Dados inválidos no corpo da requisição' })
@ApiUnprocessableEntityResponse({ description: 'Erro de validação nos dados fornecidos' })

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(ISignInUseCase)
    private readonly signInUseCase: ISignInUseCase,
    @Inject(IGetMeUseCase)
    private readonly getMeUseCase: IGetMeUseCase,
  ) {}

  @Post('login')
  @ApiOperation({ summary: 'Realiza o login de um usuário' })
  @ApiCreatedResponse({ description: 'Usuário logado com sucesso', type: SignInResponseDto })
  async create(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    loginDto: SignInInputDto,
    @Res({ passthrough: true }) res: Response, // aqui explicita o tipo do Express Response
  ): Promise<SignInResponseDto> {
    const response = await this.signInUseCase.execute(loginDto);
    res.cookie('Authentication', response.token, { httpOnly: true });
    return response;
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('me')
  @ApiOperation({ summary: 'Retorna os dados do usuário logado' })
  async findMe(@Req() req: Request) {
    const userId = req.user?.sub;
    if (!userId) {
      throw new Error('Usuário não encontrado');
    }
    return this.getMeUseCase.execute(userId);
  }
}
