import { Injectable, NotFoundException } from '@nestjs/common';
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
      { id: true, name: true, ads: false },
    );

    const ad = await this.adsService.findOne({ id: adId });

    const commentInstance = this.commentsRepository.create({ text, user, ad });

    return this.commentsRepository.save(commentInstance);
  }

  async findOne(id: string) {
    const comment = await this.commentsRepository.findOne({
      where: { id },
      select: { user: { id: true, name: true } },
    });

    if (!comment) {
      throw new NotFoundException('comment not found');
    }

    return comment;
  }

  async update(id: string, { text }: UpdateCommentDto) {
    const comment = await this.findOne(id);

    comment.text = text;
    return this.commentsRepository.save(comment);
  }

  async remove(id: string) {
    const comment = await this.findOne(id);

    await this.commentsRepository.delete(comment);
  }
}
