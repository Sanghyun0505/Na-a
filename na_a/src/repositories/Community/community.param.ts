export interface DeleteParam {
  id: string;
  commentId: string;
}

export interface PostCommunityParam {
  category: string;
  title: string;
  content: string;
  images: string;
}

export interface PostCommentParam {
    content:string;
    communityId: string;
}
