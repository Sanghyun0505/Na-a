import { IsNotEmpty, IsString } from 'class-validator'

export class createCommentDto {
  @IsString()
  @IsNotEmpty()
    content: string
}
