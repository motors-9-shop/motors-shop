import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FindOptionsRelations,
  FindOptionsSelect,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const emailFind = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (emailFind) {
      throw new BadRequestException('email already exists');
    }

    const userInstance = this.usersRepository.create(createUserDto);

    const { id } = await this.usersRepository.save(userInstance);

    return this.usersRepository.findOne({
      where: { id },
      relations: { ads: true },
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(
    where: FindOptionsWhere<User>,
    select?: FindOptionsSelect<User>,
    relations?: FindOptionsRelations<User>,
  ) {
    const user = await this.usersRepository.findOne({
      where,
      relations: {
        ads: {
          vehicle: true,
          user: true,
        },
        address: true,
      },

    });

    if (!user) {
      throw new NotFoundException('user not found');
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        address: true,
      },
    });

    const updatedUser = Object.assign(user, updateUserDto);

    const saveOptions = { relations: ['address'] };

    await this.usersRepository.save(updatedUser, saveOptions);

    return user;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
