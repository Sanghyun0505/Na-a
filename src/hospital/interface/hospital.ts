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
