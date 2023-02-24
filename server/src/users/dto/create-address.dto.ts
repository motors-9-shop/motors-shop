import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNumber()
  @IsPositive()
  number: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  complement: string;

  @IsNumberString()
  @Length(8, 8)
  cep: string;
}
