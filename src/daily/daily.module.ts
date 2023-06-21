import { Module } from '@nestjs/common'
import { DailyService } from './daily.service'
import { Daily } from './entities/daily.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Daily])],
  providers: [DailyService],
  exports: [DailyService]
})
export class DailyModule {}
