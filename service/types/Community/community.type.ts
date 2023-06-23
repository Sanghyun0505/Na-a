export interface CommunityListReponse {
  success: boolean;
  data: [
    {
      category: string;
      comments: string[];
      content: string;
      images: string[];
      title: string;
      user: {
        profileImage: string;
        userid: string;
        _id: string;
      };
      __v: number;
      _id: string;
    }
  ];
}

export interface CommunityItemType {
  category: string;
  comments: string[];
  content: string;
  images: string[];
  title: string;
  user: {
    profileImage: string;
    userid: string;
    _id: string;
  };
  __v: number;
  _id: string;
}

export interface CommmentListReponse {
  success: boolean;
  data: {
    category: string;
    comments: string[];
    content: string;
    images: string[];
    title: string;
    user: {
      profileImage: string;
      userid: string;
      _id: string;
    };
    __v: number;
    _id: string;
  };
}

export interface CommentIdReponse {
  success: boolean;
  data: {
    community: string;
    communityId: string;
    content: string;
    createdAt: string;
    user: {
      profileImage: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E";
      userid: string;
      _id: string;
    };
    __v: 0;
    _id: string;
  };
}
