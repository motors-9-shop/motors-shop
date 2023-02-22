import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class SessionsService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login({ email, password }: LoginUserDto) {
    const user = await this.usersService.findOne({ email });

    const passwordIsValid = await compare(password, user.password);
    if (!passwordIsValid) {
      throw new BadRequestException("user or password don't match");
    }

    const token = this.jwtService.sign(
      { email: user.email },
      { subject: user.id, expiresIn: '7d' },
    );
    return { token };
  }
}
