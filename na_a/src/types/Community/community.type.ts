export interface CommunityResponse {
  success: boolean;
  body: CommunityListResponse[];
}

export interface CommunityListResponse {
  id: string;
  category: string;
  title: string;
  content: string;
  createdAt: string;
  user: {
    id: string;
    userid: string;
    username: string;
    profileImage: string;
  };
}

export interface CommunityIdResponse {
  success: boolean;
  body: CommunityIdListResponse;
}

export interface CommunityIdListResponse {
  id: string;
  category: string;
  title: string;
  content: string;
  createdAt: string;
  user: {
    id: string;
    userid: string;
    username: string;
    profileImage: string;
  };
  comments: [
    {
      id: string;
      content: string;
      createdAt: string;
      user: {
        id: string;
        userid: string;
        username: string;
        profileImage: string;
      };
    }
  ];
}
