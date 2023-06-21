import { ApiProperty } from '@nestjs/swagger'
import { IsDate, IsNotEmpty, IsString } from 'class-validator'

export class createDailyDto {
  @ApiProperty({ type: Date, description: 'The date of the daily entry' })
  @IsDate()
  @IsNotEmpty()
    date: Date

  @ApiProperty({ type: String, description: 'The content of the daily entry' })
  @IsString()
  @IsNotEmpty()
    content: string
}
