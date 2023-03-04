import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdsModule } from './ads/ads.module';
import { CommentsModule } from './comments/comments.module';
import { MailerModule } from './mailer/mailer.module';
import { SessionsModule } from './sessions/sessions.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
    }),
    ScheduleModule.forRoot(),
    UsersModule,
    SessionsModule,
    AdsModule,
    CommentsModule,
    MailerModule,
  ],
})
export class AppModule {}
