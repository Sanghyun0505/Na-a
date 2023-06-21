import { type UserType } from '../entities/user.entity'

export class UserDto {
  id: string
  userid: string
  username: string
  type: UserType
  profileImage: string
  createdAt: Date
}
