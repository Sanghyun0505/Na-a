import { Injectable, NotFoundException } from '@nestjs/common'
import axios from 'axios'
import { type Hospital } from './interface/hospital'
import { type searchNearbyDto } from './dto/searchNearby.dto'
import { Repository } from 'typeorm'
import { HospitalReview } from './entities/hospital_review.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { type createHospitalReviewDto } from './dto/createHospitalReview.dto'
import { type updateHospitalReviewDto } from './dto/updateHospitalReview'

@Injectable()
export class HospitalService {
  constructor (
    @InjectRepository(HospitalReview)
    private readonly hospitalRepository: Repository<HospitalReview>
  ) {}

  async searchNearby (body: searchNearbyDto): Promise<Hospital[]> {
    const url = `http://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlMdcncLcinfoInqire?WGS84_LON=${body.lng}&WGS84_LAT=${body.lat}&pageNo=1&numOfRows=100&serviceKey=gOglL64l0mlvhhD8wyQd6Rypv11St6INjHBoGyAshASEOHp%2F0skYEZ9QD1abjUCNiRpSskUOodnVhqPxU2OcTw%3D%3D`

    try {
      const response = await axios.get(url)
      const jsonData = response.data
      const items = jsonData.response.body.items.item
      const hospitals: Hospital[] = Array.isArray(items) ? items : [items]

      if (body.filters.length > 0) {
        const filteredHospitals = hospitals.filter((hospital) => body.filters.includes(hospital.dutyDiv))
        return filteredHospitals
      }

      return hospitals
    } catch (error) {
      console.error('Error occurred while fetching nearby hospitals:', error)
      throw error
    }
  }

  async getReviewByHospital (hospitalId: string): Promise<HospitalReview[]> {
    return await this.hospitalRepository.find({
      where: {
        hospital_id: hospitalId
      }
    })
  }

  async createReview (id: string, hospitalId: string, body: createHospitalReviewDto): Promise<HospitalReview> {
    const review = new HospitalReview()
    review.user_id = id
    review.hospital_id = hospitalId
    review.content = body.content
    review.score = body.score

    return await this.hospitalRepository.save(review)
  }

  async deleteReview (id: string, reviewId: string, hospitalId: string): Promise<HospitalReview> {
    const review = await this.hospitalRepository.findOneBy({ user_id: id, id: reviewId, hospital_id: hospitalId })
    if (!review) throw new NotFoundException('Review not found')

    await this.hospitalRepository.remove(review)
    return review
  }

  async updateReview (id: string, reviewId: string, hospitalId: string, body: updateHospitalReviewDto): Promise<HospitalReview> {
    const review = await this.hospitalRepository.findOneBy({ user_id: id, id: reviewId, hospital_id: hospitalId })
    if (!review) throw new NotFoundException('Review not found')

    review.content = body.content
    review.score = body.score

    return await this.hospitalRepository.save(review)
  }
}
