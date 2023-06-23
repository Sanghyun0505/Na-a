export interface ChildrenListResponse {
  data: [
    {
      birthdate: null;
      bloodType: string;
      daily: string[];
      gender: string;
      height: number;
      name: string;
      parent: {
        _id: string;
        userid: string;
        profileImage: string;
      };
      weight: number;
      __v: number;
      _id: string;
    }
  ];
}
