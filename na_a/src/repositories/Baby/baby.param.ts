export interface BabyPostDailyParam {
  name: string;
  gender: number;
  birthdate: string | Date;
  height: number;
  weight: number;
  bloodType: string;
  profileImage: string;
}

export interface patchPostBabyParam {
  date: string;
  content: string;
}

export interface BabyListIdDailyParam {
  id: string;
  date: string;
  content: string;
}
