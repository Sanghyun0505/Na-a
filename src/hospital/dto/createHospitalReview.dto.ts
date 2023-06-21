import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator'

export class createHospitalReviewDto {
  @IsNumber()
  @Min(0)
  @Max(5)
  @IsNotEmpty()
    score: number

  @IsString()
  @IsNotEmpty()
    content: string
}
