import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { CommunityCategory } from '../entities/community.entity'

export class createCommunityDto {
  @IsEnum(CommunityCategory)
  @IsNotEmpty()
    category: CommunityCategory

  @IsString()
  @IsNotEmpty()
    title: string

  @IsString()
  @IsNotEmpty()
    content: string

  @IsString()
  @IsOptional()
    images: string
}
