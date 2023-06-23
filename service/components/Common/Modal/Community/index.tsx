import { useCloseModal } from "@/hooks/Common/useCloseModal";
import * as S from "./style";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  CommunityCommentId,
  CommunityModal,
} from "@/store/Community/cmmunity.store";
import Sheet from "react-modal-sheet";
import Image from "next/image";
import edit from "@/public/edit.svg";
import check from "@/public/check.svg";
import { usePostComment } from "@/hooks/Community/usePostComment";
import { useEffect, useState } from "react";
import { customAxios } from "@/libs/Axios/customAxios";
import { CommmentListReponse } from "@/types/Community/community.type";
import { getTimeAgo } from "@/libs/Date/getTimeAgo";
import CommentItem from "./CommentItem";

export default function ModalCommunity() {
  const [communityModal, setCommunityModal] = useRecoilState(CommunityModal);
  const { handleChange, content, handleCommentSubmit } = usePostComment();
  const communityCommentId = useRecoilValue(CommunityCommentId);
  const [commentList, setCommentList] = useState<CommmentListReponse | null>(
    null
  );
  useCloseModal(setCommunityModal);

  useEffect(() => {
    const getCommentList = async () => {
      try {
        const data = await customAxios.get(`community/${communityCommentId}`);
        setCommentList(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    getCommentList();
  }, []);
  return (
    <Sheet
      isOpen={communityModal}
      onClose={() => setCommunityModal(false)}
      tweenConfig={{ ease: "easeOut", duration: 0.8 }}
      snapPoints={[600, 400]}
      initialSnap={1.5}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <S.ModalWrap>
            <S.ModalContainer>
              {commentList?.data.comments.map((item) => (
                <CommentItem id={communityCommentId} key={item} commentId={item}/>
              ))}
            </S.ModalContainer>
          </S.ModalWrap>
          <S.CommentInputContainer>
            <S.CommentInput
              type="text"
              placeholder="댓글을 작성하세요."
              value={content}
              onChange={handleChange}
            />
            <S.CommentSubmitBtn
              src={check}
              alt="check"
              onClick={(e: React.MouseEvent<HTMLImageElement>) =>
                handleCommentSubmit(e, communityCommentId)
              }
            />
          </S.CommentInputContainer>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}
