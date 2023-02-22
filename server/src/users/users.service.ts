import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Address } from './entities/address.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Address)
    private addressesRepository: Repository<Address>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const errors = await validate(createUserDto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    const emailFind = this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (emailFind) {
      throw new BadRequestException('email already exists');
    }

    const addressInstance = this.addressesRepository.create(
      createUserDto.address,
    );
    this.addressesRepository.save(addressInstance);

    createUserDto.address = addressInstance;

    const userInstance = this.usersRepository.create(createUserDto);

    return this.usersRepository.save(userInstance);
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(where: FindOptionsWhere<User>) {
    const user = await this.usersRepository.findOne({
      where,
    });

    if (!user) {
      throw new NotFoundException('user not found');
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
