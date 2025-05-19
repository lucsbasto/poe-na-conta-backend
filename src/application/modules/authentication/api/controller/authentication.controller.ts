import { ISignInUseCase } from '@/domain/authentication/interfaces/usecases/sign-in';
import { Body, Controller, Inject, Post, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
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
  ) {}

  @Post('login')
  @ApiOperation({ summary: 'Realiza o login de um usuário' })
  @ApiCreatedResponse({ description: 'Usuário logado com sucesso', type: SignInResponseDto })
  async create(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    loginDto: SignInInputDto,
  ): Promise<SignInResponseDto> {
    return this.signInUseCase.execute(loginDto);
  }
}
