import { DeepPartial } from 'typeorm';
import { Address } from '../entities/address.entity';

export class CreateUserDto {
  name: string;

  password: string;

  dateOfBirth: string;

  email: string;

  cpf: string;

  phone: string;

  description: string;

  createdAt: string;

  updatedAt: string;

  address: DeepPartial<Address>;
}
