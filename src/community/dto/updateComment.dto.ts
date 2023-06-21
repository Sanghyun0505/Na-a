import { IsOptional, IsString } from 'class-validator'

export class updateCommentDto {
  @IsString()
  @IsOptional()
    content: string
}
