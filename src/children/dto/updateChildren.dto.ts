import { IsDate, IsEnum, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator'
import { ChildrenGender } from '../entities/child.entity'

export class UpdateChildrenDto {
  @IsString()
  @IsOptional()
    name: string

  @IsEnum(ChildrenGender)
  @IsOptional()
    gender: ChildrenGender

  @IsUrl()
  @IsOptional()
    profileImage?: string

  @IsDate()
  @IsOptional()
    birthdate: Date

  @IsNumber()
  @IsOptional()
    height: number

  @IsNumber()
  @IsOptional()
    weight: number

  @IsString()
  @IsOptional()
    bloodType: string

  @IsString({ each: true })
  @IsOptional()
    allergies: string[]

  @IsString({ each: true })
  @IsOptional()
    medications: string[]

  @IsString()
  @IsOptional()
    medicalRecords: string
}
