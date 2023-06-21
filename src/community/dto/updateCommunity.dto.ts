import { IsEnum, IsOptional, IsString } from 'class-validator'
import { CommunityCategory } from '../entities/community.entity'

export class updateCommunityDto {
  @IsEnum(CommunityCategory)
  @IsOptional()
    category: CommunityCategory

  @IsString()
  @IsOptional()
    title: string

  @IsString()
  @IsOptional()
    content: string

  @IsString()
  @IsOptional()
    images: string
}
