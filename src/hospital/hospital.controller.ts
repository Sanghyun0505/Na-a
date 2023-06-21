import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common'
import { HospitalService } from './hospital.service'
import { type Hospital } from './interface/hospital'
import { searchNearbyDto } from './dto/searchNearby.dto'
import { type ResponseBody } from 'src/interface/ResponseBody'
import { type HospitalReview } from './entities/hospital_review.entity'
import { createHospitalReviewDto } from './dto/createHospitalReview.dto'
import { AuthGuard } from 'src/auth/auth.guard'
import { type User } from 'src/user/entities/user.entity'
import { Request } from 'express'
import { updateHospitalReviewDto } from './dto/updateHospitalReview'

@Controller('hospital')
export class HospitalController {
  constructor (private readonly hospitalService: HospitalService) {}

  @UseGuards(AuthGuard)
  @Post('/near')
  async searchNearby (@Body() body: searchNearbyDto): Promise<ResponseBody<Hospital[]>> {
    return {
      success: true,
      body: await this.hospitalService.searchNearby(body)
    }
  }

  @UseGuards(AuthGuard)
  @Get('/:id/review')
  async getReviewByHospital (id: string): Promise<ResponseBody<HospitalReview[]>> {
    return {
      success: true,
      body: await this.hospitalService.getReviewByHospital(id)
    }
  }

  @UseGuards(AuthGuard)
  @Post('/:id/review')
  async createReview (@Req() req: Request, @Param('id') id: string, @Body() body: createHospitalReviewDto): Promise<ResponseBody<HospitalReview>> {
    const user = req.user as User

    return {
      success: true,
      body: await this.hospitalService.createReview(user.id, id, body)
    }
  }

  @UseGuards(AuthGuard)
  @Patch('/:id/review/:reviewId')
  async updateReview (@Req() req: Request, @Param('id') id: string, @Param('reviewId') reviewId: string, @Body() body: updateHospitalReviewDto): Promise<ResponseBody<HospitalReview>> {
    const user = req.user as User
    return {
      success: true,
      body: await this.hospitalService.updateReview(user.id, reviewId, id, body)
    }
  }

  @UseGuards(AuthGuard)
  @Delete('/:id/review/:reviewId')
  async deleteReview (@Req() req: Request, @Param('id') id: string, @Param('reviewId') reviewId: string): Promise<ResponseBody<HospitalReview>> {
    const user = req.user as User
    return {
      success: true,
      body: await this.hospitalService.deleteReview(user.id, reviewId, id)
    }
  }
}
