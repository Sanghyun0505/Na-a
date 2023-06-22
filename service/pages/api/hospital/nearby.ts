import type { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '@/libs/Database/dbConnect'
import { ResponseBody } from '@/interface/ResponseBody'
import { authGuard } from '@/libs/auth/authGuard'
import axios from 'axios'

dbConnect()
export interface Hospital {
  cnt: number
  distance: number
  dutyAddr: string
  dutyDiv: HospitalType
  dutyDivName: string
  dutyEmcls: string
  dutyFax: string
  dutyLvkl: number
  dutyName: string
  dutyTel1: string
  endTime: number
  hpid: string
  latitude: number
  longitude: number
  rnum: number
  startTime: string
}

export enum HospitalType {
  GENERAL_HOSPITAL = 'A',
  COMPREHENSIVE_HOSPITAL = 'A',
  HOSPITAL = 'B',
  MILITARY_HOSPITAL = 'B',
  CLINIC = 'C',
  MILITARY_CLINIC = 'C',
  NURSING_HOSPITAL = 'D',
  TRADITIONAL_MEDICINE_HOSPITAL = 'E',
  TRADITIONAL_MEDICINE_CLINIC = 'F',
  MILITARY_TRADITIONAL_MEDICINE_CLINIC = 'F',
  PHARMACY = 'G',
  OTHERS = 'H',
  DENTAL_HOSPITAL = 'M',
  DENTAL_CLINIC = 'N',
  PUBLIC_HEALTH_CENTER = 'R',
  HEALTH_CENTER = 'R',
  HEALTH_CLINIC = 'R',
  HEALTH_MEDICAL_CENTER = 'R',
  TRANSFER_ORGANIZATION = 'R',
  EMERGENCY_MEDICAL_CENTER = 'T',
  POLICE_STATION_INCLUDING_PRISON = 'U',
  LOCAL_GOVERNMENT = 'V',
  OTHER_FACILITIES = 'W',
  MILITARY_OTHER_FACILITIES = 'W',
  CENTRAL_EMERGENCY_MEDICAL_CENTER = 'Y',
  EMERGENCY_MEDICAL_SUPPORT_CENTER = 'Z'
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody<Hospital[]>>
) {
  if (req.method !== 'POST') return res.status(405).json({ success: false, message: '해당 메서드는 허용되지 않은 메서드입니다.' })
  const { lat, lng, filters } = req.body

  const url = `http://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlMdcncLcinfoInqire?WGS84_LON=${lng}&WGS84_LAT=${lat}&pageNo=1&numOfRows=100&serviceKey=gOglL64l0mlvhhD8wyQd6Rypv11St6INjHBoGyAshASEOHp%2F0skYEZ9QD1abjUCNiRpSskUOodnVhqPxU2OcTw%3D%3D`

    try {
      const response = await axios.get(url)
      const jsonData = response.data
      const items = jsonData.response.body.items.item
      const hospitals: Hospital[] = Array.isArray(items) ? items : [items]

      if (filters.length > 0) {
        const filteredHospitals = hospitals.filter((hospital) => filters.includes(hospital.dutyDiv))
        return res.status(200).json({ success: true, data: filteredHospitals })
      }
      
      res.status(200).json({ success: true, data: hospitals })
    } catch (error) {
      console.error(error)
      res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.' })
    }
}

export default authGuard(handler)
