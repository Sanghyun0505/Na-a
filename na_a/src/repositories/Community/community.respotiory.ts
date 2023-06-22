import { customAxios } from "../../libs/Axios/customAxios";
import {
  CommunityIdResponse,
  CommunityResponse,
} from "../../types/Community/community.type";
import { PostCommentParam, PostCommunityParam } from "./community.param";

class CommunityRepository {
  public async postCommunity(arr: PostCommunityParam): Promise<void> {
    await customAxios.post("/community", arr);
  }

  public async getCommunity(): Promise<CommunityResponse> {
    const { data } = await customAxios.get("/community");
    return data;
  }

  public async getCommunityId(id: string): Promise<CommunityIdResponse> {
    const { data } = await customAxios.get(`/community/${id}`);
    return data;
  }

  public async deleteCommunityId(id: string): Promise<void> {
    await customAxios.delete(`/community/${id}`);
  }

  public async postCommunityIdComment({
    content,
    communityId,
  }: PostCommentParam): Promise<void> {
    await customAxios.post(`/community/${communityId}/comment`, { content });
  }

  public async deleteCommunityIdComment(
    id: string,
    commentId: string
  ): Promise<void> {
    await customAxios.delete(`/community/${id}/comment/${commentId}`);
  }
}

export default new CommunityRepository();
