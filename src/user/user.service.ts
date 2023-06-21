import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { Repository } from 'typeorm'
import { type CreateUserDto } from './dto/create-user.dto'
import { type UpdateUserDto } from './dto/update-user.dto'
import { SHA512 } from 'crypto-js'
import { type UserDto } from './dto/user.dto'

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async createUser (createUserDto: CreateUserDto): Promise<UserDto> {
    const randomHash = this.generateRandomHash(5)
    console.log(createUserDto.password)
    const hashedPassword = SHA512(randomHash + createUserDto.password).toString()
    const user = this.userRepository.create({
      ...createUserDto,
      hash: randomHash,
      password: hashedPassword
    })

    console.log(randomHash, hashedPassword)
    const savedUser = await this.userRepository.save(user)
    return this.mapToUserDto(savedUser)
  }

  async getUserById (id: string): Promise<User | undefined> {
    return await this.userRepository.findOneBy({ id })
  }

  async getUserByUserId (id: string): Promise<User | undefined> {
    return await this.userRepository.findOneBy({ userid: id })
  }

  async updateUser (id: string, updateUserDto: UpdateUserDto): Promise<User | undefined> {
    await this.userRepository.update(id, updateUserDto)
    return await this.userRepository.findOneBy({ id })
  }

  async deleteUser (id: string): Promise<void> {
    await this.userRepository.delete(id)
  }

  private mapToUserDto (user: User): UserDto {
    const { id, userid, username, type, profileImage, createdAt } = user
    return { id, userid, username, type, profileImage, createdAt }
  }

  private generateRandomHash (length): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let hash = ''

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      hash += characters[randomIndex]
    }

    return hash
  }
}
