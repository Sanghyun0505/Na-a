import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator'

export class updateHospitalReviewDto {
  @IsNumber()
  @Min(0)
  @Max(5)
  @IsOptional()
    score: number

  @IsString()
  @IsOptional()
    content: string
}
