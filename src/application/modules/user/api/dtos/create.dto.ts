import { Role } from '@/domain/common/enums/role';
import { ICreateUserInput } from '@/domain/user/interfaces/dtos';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString, IsUUID, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto implements ICreateUserInput {
  @ApiProperty({ example: 'user@email.com', description: 'Email do usuário' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório' })
  @IsEmail({}, { message: 'O e-mail informado é inválido' })
  email!: string;

  @ApiProperty({
    example: 'Senha@123',
    description: 'Senha do usuário (mínimo 6 caracteres)',
  })
  @IsNotEmpty({ message: 'A senha é obrigatória' })
  @IsString({ message: 'A senha deve ser uma string' })
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
  @MaxLength(64, { message: 'A senha deve ter no máximo 64 caracteres' })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d).+$/, {
    message: 'A senha deve conter letras e números',
  })
  password!: string;

  @ApiProperty({ example: Role.SELLER, enum: Role, description: 'Perfil de acesso' })
  @IsNotEmpty({ message: 'O perfil (role) é obrigatório' })
  @IsEnum(Role, { message: 'O perfil informado é inválido' })
  role!: Role;

  @ApiProperty({ example: '3507d8b5-ed0f-45bd-b2e1-7b539259069e', description: 'Id do customer' })
  @IsNotEmpty({ message: 'O id do customer é obrigatório' })
  @IsUUID('4', { message: 'O id do customer deve ser um UUID válido' })
  customerId!: string;

  @ApiProperty({ example: 'Jorge Gustavo', description: 'Nome do usuário' })
  @IsNotEmpty({ message: 'O nome do usuário é obrigatório' })
  @IsString({ message: 'O nome do usuário deve ser uma string' })
  @MaxLength(100, { message: 'O nome do usuário deve ter no máximo 100 caracteres' })
  name!: string;
}
