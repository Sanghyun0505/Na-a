import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Daily } from './entities/daily.entity'
import { Repository } from 'typeorm'
import { type createDailyDto } from './dto/createDaily.dto'
import { type updateDailyDto } from './dto/updateDaily.dto'

@Injectable()
export class DailyService {
  constructor (
    @InjectRepository(Daily)
    private readonly dailyRepository: Repository<Daily>
  ) {}

  async create (id: string, createDailyDto: createDailyDto): Promise<Daily> {
    const daily = this.dailyRepository.create({
      ...createDailyDto,
      child: { id }
    })
    return await this.dailyRepository.save(daily)
  }

  async findAll (id: string): Promise<Daily[]> {
    return await this.dailyRepository.find({
      where: {
        child: { id }
      },
      select: {
        id: true,
        date: true,
        content: true
      }
    })
  }

  async findOne (id: string, dailyid: string): Promise<Daily> {
    const daily = await this.dailyRepository.findOne({
      where: {
        child: { id },
        id: dailyid
      },
      select: {
        id: true,
        date: true,
        content: true
      }
    })
    if (!daily) throw new NotFoundException('Daily not found')
    return daily
  }

  async update (id: string, dailyid: string, updateDailyDto: updateDailyDto): Promise<Daily> {
    const daily = await this.dailyRepository.findOne({
      where: {
        child: { id },
        id: dailyid
      }
    })
    if (!daily) throw new NotFoundException('Daily not found')
    return await this.dailyRepository.save({ ...daily, ...updateDailyDto })
  }

  async remove (id: string, dailyid: string): Promise<Daily> {
    const daily = await this.dailyRepository.findOne({
      where: {
        child: { id },
        id: dailyid
      }
    })
    if (!daily) throw new NotFoundException('Daily not found')
    await this.dailyRepository.remove(daily)
    return daily
  }
}
