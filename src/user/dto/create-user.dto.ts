import { type UserType } from '../entities/user.entity'

export class CreateUserDto {
  userid: string
  password: string
  username?: string
  profileImager?: string
  type: UserType
}
