import { Module } from '@nestjs/common'
import { HospitalService } from './hospital.service'
import { HospitalController } from './hospital.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { HospitalReview } from './entities/hospital_review.entity'
import { AuthModule } from 'src/auth/auth.module'

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([HospitalReview])
  ],
  providers: [HospitalService],
  controllers: [HospitalController]
})
export class HospitalModule {}
