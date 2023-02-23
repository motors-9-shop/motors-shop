import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  Length,
  ValidateNested,
} from 'class-validator';
import { UserRole } from '../entities/user.entity';
import { CreateAddressDto } from './create-address.dto';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsStrongPassword({})
  password: string;

  @IsDateString()
  dateOfBirth: string;

  @IsEmail()
  email: string;

  @Length(11, 11)
  @IsNumberString()
  cpf: string;

  @IsPhoneNumber('BR')
  phone: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsEnum(UserRole)
  role: UserRole;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
