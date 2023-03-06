import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdsService } from '../ads/ads.service';
import { UsersService } from '../users/users.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
    private usersService: UsersService,
    private adsService: AdsService,
  ) {}

  async create({ text, adId }: CreateCommentDto, id: string) {
    const user = await this.usersService.findOne(
      { id },
      { id: true, name: true },
    );

    const ad = await this.adsService.findOne({ id: adId });

    const commentInstance = this.commentsRepository.create({ text, user, ad });

    return this.commentsRepository.save(commentInstance);
  }

  update(id: string, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
