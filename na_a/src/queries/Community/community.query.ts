import { useMutation, useQuery } from "react-query";
import communityRespotiory from "../../repositories/Community/community.respotiory";
import {
  DeleteParam,
  PostCommentParam,
  PostCommunityParam,
} from "../../repositories/Community/community.param";

export const usePostCommunityMutation = () => {
  return useMutation((arr: PostCommunityParam) =>
    communityRespotiory.postCommunity(arr)
  );
};

export const useGetCommunityQuery = () =>
  useQuery("/community", () => communityRespotiory.getCommunity(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const useGetCommunityIdQuery = (id: string) =>
  useQuery(
    ["/community/id", id],
    () => communityRespotiory.getCommunityId(id),
    {
      enabled: !!id,
    }
  );

export const useDeleteCommunityIdMutation = () => {
  return useMutation((id: string) => communityRespotiory.deleteCommunityId(id));
};

export const usePostCommunityIdCommentMutation = () => {
  return useMutation(({ content, communityId }: PostCommentParam) =>
    communityRespotiory.postCommunityIdComment({ communityId, content })
  );
};

export const useDeleteCommunityIdCommentMutation = () => {
  return useMutation(({ id, commentId }: DeleteParam) =>
    communityRespotiory.deleteCommunityIdComment(id, commentId)
  );
};
