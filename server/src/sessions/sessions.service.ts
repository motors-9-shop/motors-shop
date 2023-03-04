import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SchedulerRegistry } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcryptjs';
import { randomBytes } from 'crypto';
import { join } from 'path';
import { Repository } from 'typeorm';
import { MailerService } from '../mailer/mailer.service';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private usersService: UsersService,
    private jwtService: JwtService,
    private mailerService: MailerService,
    private schedulerRegistry: SchedulerRegistry,
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

  async getProfile(id: string) {
    const user = await this.usersService.findOne({ id });

    return user;
  }

  async forgotPassword(email: string) {
    const { name, id } = await this.usersService.findOne({
      email,
    });

    const scheduleName = `${id}_remove_recovery`;

    const timeoutExists = this.schedulerRegistry.doesExist(
      'timeout',
      scheduleName,
    );

    if (timeoutExists) {
      this.schedulerRegistry.deleteTimeout(scheduleName);
    }

    const recoveryCode = randomBytes(64).toString('hex');

    await this.usersRepository.update(id, { recoveryCode });

    this.mailerService.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Motors Shop - Recuperação de Senha',
      html: this.mailerService.template('recoveryPassword', {
        name,
        recoveryCode,
      }),
      attachments: [
        {
          cid: 'logo',
          path: join(__dirname, '..', 'assets', 'logo-outline.png'),
          filename: 'logo-outline.png',
        },
      ],
    });

    const timeout = setTimeout(() => {
      this.removeRecoveryCode(id);
    }, 1000 * 60);
    this.schedulerRegistry.addTimeout(scheduleName, timeout);
  }
}
