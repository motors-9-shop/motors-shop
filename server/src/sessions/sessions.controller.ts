import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Put,
  SerializeOptions,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { User } from '../decorators';
import { JwtAuthGuard } from '../guards';
import { LoginUserDto } from './dto/login-user.dto';
import { RecoveryPasswordDto } from './dto/recovery-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
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

  @Put('profile/password/recovery')
  forgotPassword(@Body() { email }: RecoveryPasswordDto) {
    return this.sessionsService.forgotPassword(email);
  }

  @Put('profile/password/:recoveryCode')
  resetPassword(
    @Body() { password }: ResetPasswordDto,
    @Param('recoveryCode') recoveryCode: string,
  ) {
    return this.sessionsService.resetPassword(recoveryCode, password);
  }
}
