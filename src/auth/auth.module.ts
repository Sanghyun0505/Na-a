import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UserModule } from 'src/user/user.module'
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller'

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET ?? 'thisissecrethidethis',
      signOptions: { expiresIn: '1d' }
    })
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
