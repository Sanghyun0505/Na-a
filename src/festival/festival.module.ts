import { Module } from '@nestjs/common'
import { FestivalService } from './festival.service'
import { FestivalController } from './festival.controller'

@Module({
  providers: [FestivalService],
  controllers: [FestivalController]
})
export class FestivalModule {}
