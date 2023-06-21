import { IsNotEmpty, IsString } from 'class-validator'

export class SigninDto {
  @IsString()
  @IsNotEmpty()
    userid: string

  @IsString()
  @IsNotEmpty()
    password: string
}
