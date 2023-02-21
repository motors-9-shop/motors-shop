import { ApiProperty } from '@nestjs/swagger';
import { DeepPartial } from 'typeorm';
import { Address } from '../entities/address.entity';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  dateOfBirth: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;

  @ApiProperty()
  address: DeepPartial<Address>;
}
