import { type UserType } from '../entities/user.entity'

export class UpdateUserDto {
  password?: string
  username?: string
  profileImager?: string
  type?: UserType
}
