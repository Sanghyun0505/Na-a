import { ApiProperty } from '@nestjs/swagger'
import { IsDate, IsOptional, IsString } from 'class-validator'

export class updateDailyDto {
  @ApiProperty({ type: Date, description: 'The updated date of the daily entry' })
  @IsDate()
  @IsOptional()
    date?: Date

  @ApiProperty({ type: String, description: 'The updated content of the daily entry' })
  @IsString()
  @IsOptional()
    content?: string
}
