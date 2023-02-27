import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  SerializeOptions,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { User } from '../decorators';
import { JwtAuthGuard } from '../guards';
import { LoginUserDto } from './dto/login-user.dto';
import { SessionsService } from './sessions.service';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return await this.sessionsService.login(loginUserDto);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @SerializeOptions({ groups: ['personal'] })
  async getProfile(@User('id') id: string) {
    return await this.sessionsService.getProfile(id);
  }
}
