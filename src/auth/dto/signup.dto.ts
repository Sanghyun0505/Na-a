import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator'
import { UserType } from 'src/user/entities/user.entity'

export class SignupDto {
  @IsString()
  @IsNotEmpty()
    userid: string

  @IsString()
  @IsNotEmpty()
    password: string

  @IsString()
  @IsOptional()
    username?: string

  @IsUrl()
  @IsOptional()
    profileImage?: string

  @IsEnum(UserType)
  @IsNotEmpty()
    type: UserType
}
