import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { SigninDto } from './dto/signin.dto'
import { type ResponseBody } from 'src/interface/ResponseBody'
import { SignupDto } from './dto/signup.dto'
import { type UserDto } from 'src/user/dto/user.dto'

@Controller('auth')
export class AuthController {
  constructor (
    private readonly authService: AuthService
  ) {}

  @Post('/signin')
  async signIn (@Body() body: SigninDto): Promise<ResponseBody<string>> {
    const accessToken = await this.authService.signIn(body)

    return {
      success: true,
      body: accessToken
    }
  }

  @Post('/signup')
  async signUp (@Body() body: SignupDto): Promise<ResponseBody<UserDto>> {
    const createdUser = await this.authService.signUp(body)

    return {
      success: true,
      body: createdUser
    }
  }
}
