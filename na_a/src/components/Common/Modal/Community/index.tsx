import { useSetRecoilState } from "recoil";
import { useCloseModal } from "../../../../hooks/Common/useCloseModal";
import { CommunityModal } from "../../../../store/Modal/modal.store";
import cancel from "../../../../assets/cancel.svg";
import postListBtn from "../../../../assets/postListBtn.svg";
import commentMore from "../../../../assets/commentMore.svg";
import * as S from "./style";

export default function ModalCommunity() {
  const setCommunityModal = useSetRecoilState(CommunityModal);
  useCloseModal(setCommunityModal);
  return (
    <S.ModalContainer onClick={() => setCommunityModal(false)}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.ModalCloseBtnContainer>
          <div>댓글</div>
          <img src={cancel} onClick={() => setCommunityModal(false)} alt="" />
        </S.ModalCloseBtnContainer>

        <S.CommentListWrap>
          {Array.from({ length: 20 }).map((item, idx) => (
            <S.ModalCommentList key={idx}>
              <S.CommentUserInfo>
                <div>microsoft_hacker · 1초전</div>

                <img src={commentMore} alt="" />
              </S.CommentUserInfo>
              <div>마이크로소프트 해커톤에 오신 걸 환영합니다!</div>
            </S.ModalCommentList>
          ))}
        </S.CommentListWrap>
        <S.CommentContainer>
          <S.CommentInput placeholder="댓글을 작성해주세요." />
          <S.CommentSubmitContainer>
            <img src={postListBtn} alt="" />
          </S.CommentSubmitContainer>
        </S.CommentContainer>
      </S.Modal>
    </S.ModalContainer>
  );
}
