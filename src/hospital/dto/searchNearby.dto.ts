import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { HospitalType } from '../interface/hospital'

export class searchNearbyDto {
  @IsArray()
  @IsOptional()
  @IsEnum(HospitalType, { each: true })
  readonly filters: HospitalType[] = []

  @IsString()
  @IsNotEmpty()
  readonly lat: string

  @IsString()
  @IsNotEmpty()
  readonly lng: string
}
