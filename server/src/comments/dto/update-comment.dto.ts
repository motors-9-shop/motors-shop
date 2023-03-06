import { IsEmpty, IsString } from 'class-validator';

export class UpdateCommentDto {
  @IsEmpty()
  @IsString()
  text: string;
}
