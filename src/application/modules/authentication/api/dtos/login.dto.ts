import { ISignInInput } from '@/domain/authentication/interfaces/dtos';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignInInputDto implements ISignInInput {
  @ApiProperty({ example: 'user@email.com', description: 'Email do usuário' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório' })
  @Transform(({ value }) => value.trim())
  @IsEmail({}, { message: 'O e-mail informado é inválido' })
  email!: string;

  @ApiProperty({
    example: 'Senha@123',
    description: 'Senha do usuário (mínimo 6 caracteres)',
  })
  @IsNotEmpty({ message: 'A senha é obrigatória' })
  @IsString({ message: 'A senha deve ser uma string' })
  password!: string;
}
