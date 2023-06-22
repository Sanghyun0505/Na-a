import { useRecoilState, useRecoilValue } from "recoil";
import { useCloseModal } from "../../../../hooks/Common/useCloseModal";
import { CommunityModal } from "../../../../store/Modal/modal.store";
import cancel from "../../../../assets/cancel.svg";
import postListBtn from "../../../../assets/postListBtn.svg";
import commentMore from "../../../../assets/commentMore.svg";
import * as S from "./style";
import { CommunityId } from "../../../../store/Community/community.store";
import {
  useGetCommunityIdQuery,
  usePostCommunityIdCommentMutation,
} from "../../../../queries/Community/community.query";
import { getTimeAgo } from "../../../../libs/Date/getTimeAgo";
import { useState } from "react";
import { useQueryClient } from "react-query";
import Sheet from "react-modal-sheet";

export default function ModalCommunity() {
  const [communityModal, setCommunityModal] = useRecoilState(CommunityModal);
  const communityId = useRecoilValue<string>(CommunityId);

  const { data: communityid } = useGetCommunityIdQuery(communityId);
  const [content, setContent] = useState("");
  useCloseModal(setCommunityModal);
  const postComment = usePostCommunityIdCommentMutation();
  const queryClient = useQueryClient();

  const handleSubmitComment = async () => {
    if (content === "") {
      return window.alert("댓글을 작성해주세요!");
    }
    postComment.mutateAsync(
      { communityId, content },
      {
        onSuccess: () => {
          window.alert("댓글이 작성되었습니다!");
          setContent("");
          queryClient.invalidateQueries(["/community/id", communityId]);
        },
      }
    );
  };
  return (
    <Sheet isOpen={communityModal} onClose={() => setCommunityModal(false)}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <S.ModalCloseBtnContainer>
            <div>댓글 {communityid?.body.comments.length}</div>
            <img src={cancel} onClick={() => setCommunityModal(false)} alt="" />
          </S.ModalCloseBtnContainer>

          <S.CommentListWrap>
            {communityid?.body.comments.map((item) => (
              <S.ModalCommentList key={item.id}>
                <S.CommentUserInfo>
                  <div>
                    {item.user.username} ·{" "}
                    {getTimeAgo(new Date(item.createdAt))}
                  </div>

                  <img src={commentMore} alt="" />
                </S.CommentUserInfo>
                <div>{item.content}</div>
              </S.ModalCommentList>
            ))}
          </S.CommentListWrap>
          <S.CommentContainer>
            <S.CommentInput
              placeholder="댓글을 작성해주세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              type="text"
            />
            <S.CommentSubmitContainer>
              <img src={postListBtn} alt="" onClick={handleSubmitComment} />
            </S.CommentSubmitContainer>
          </S.CommentContainer>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}
