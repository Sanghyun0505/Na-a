export interface BabyImgResponse {
  success: boolean;
  body: string;
}

export interface BabyListResponse {
  success: boolean;
  body: [
    {
      id: string;
      name: string;
      gender: number;
      profileImage: string;
    }
  ];
}

export interface BabyListIdResponse {
  success: true;
  body: {
    id: string;
    name: string;
    gender: 0;
    profileImage: null;
    birthdate: string;
    height: string;
    weight: string;
    bloodType: string;
    allergies: string[];
    medications: string[];
    medicalRecords: string[];
  };
}
