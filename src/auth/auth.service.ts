import { Injectable, NotAcceptableException, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { SHA512 } from 'crypto-js'
import { type UserDto } from 'src/user/dto/user.dto'
import { type User } from 'src/user/entities/user.entity'
import { UserService } from 'src/user/user.service'
import { type SigninDto } from './dto/signin.dto'
import { type SignupDto } from './dto/signup.dto'

@Injectable()
export class AuthService {
  constructor (
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser (token: string): Promise<UserDto> {
    try {
      const payload = await this.jwtService.verifyAsync(token)

      const user: User = await this.userService.getUserById(payload.id)
      if (!user) throw new UnauthorizedException('token expired')

      return user
    } catch {
      throw new UnauthorizedException('token expired')
    }
  }

  async signIn (body: SigninDto): Promise<string> {
    const user = await this.userService.getUserByUserId(body.userid)
    if (!user) throw new UnauthorizedException('Unauthorized Request, check your password or id')

    const { hash, password, ...result } = user
    const hashedPassword = SHA512(hash + body.password).toString()

    if (hashedPassword !== password) throw new UnauthorizedException('Unauthorized Request, check your password or id')
    return await this.jwtService.signAsync(result)
  }

  async signUp (body: SignupDto): Promise<UserDto> {
    const user = await this.userService.getUserByUserId(body.userid)
    if (user) throw new NotAcceptableException('userid already exist')

    const createUser = await this.userService.createUser(body)

    return createUser
  }
}
