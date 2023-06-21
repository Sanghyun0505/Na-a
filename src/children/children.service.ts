import { Injectable, NotFoundException } from '@nestjs/common'
import { type CreateChildrenDto } from './dto/createChildren.dto'
import { type UpdateChildrenDto } from './dto/updateChildren.dto'
import { type User } from 'src/user/entities/user.entity'
import { Repository } from 'typeorm'
import { Child } from './entities/child.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ChildrenService {
  constructor (
    @InjectRepository(Child)
    private readonly childRepository: Repository<Child>
  ) {}

  async create (user: User, createChildDto: CreateChildrenDto): Promise<Child> {
    const child = this.childRepository.create({
      ...createChildDto,
      parent: user
    })
    return await this.childRepository.save(child)
  }

  async findAll (user: User): Promise<Child[]> {
    return await this.childRepository.find({
      where: {
        parent: user.children
      },
      select: {
        id: true,
        name: true,
        profileImage: true,
        gender: true
      }
    })
  }

  async findOne (user: User, id: string): Promise<Child> {
    const children = await this.childRepository.findOneBy({ parent: user.children, id })
    if (!children) throw new NotFoundException('Child not found')

    return children
  }

  async update (user: User, id: string, updateChildDto: UpdateChildrenDto): Promise<Child> {
    const children = await this.childRepository.findOneBy({ parent: user.children, id })
    if (!children) throw new NotFoundException('Child not found')

    return await this.childRepository.save({ ...children, ...updateChildDto })
  }

  async remove (user: User, id: string): Promise<Child> {
    const children = await this.childRepository.findOneBy({ parent: user.children, id })
    if (!children) throw new NotFoundException('Child not found')
    await this.childRepository.remove(children)

    return children
  }
}
