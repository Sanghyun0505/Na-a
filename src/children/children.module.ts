import { Module } from '@nestjs/common'
import { ChildrenService } from './children.service'
import { ChildrenController } from './children.controller'
import { AuthModule } from 'src/auth/auth.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Child } from './entities/child.entity'
import { DailyModule } from 'src/daily/daily.module'

@Module({
  imports: [
    AuthModule,
    DailyModule,
    TypeOrmModule.forFeature([Child])
  ],
  controllers: [ChildrenController],
  providers: [ChildrenService]
})
export class ChildrenModule {}
