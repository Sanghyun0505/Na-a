import * as S from "./style";
import micro from "../../../assets/micro.svg";
import chat from "../../../assets/chat.svg";
import { useSetRecoilState } from "recoil";
import { CommunityModal } from "../../../store/Modal/modal.store";

export default function HomeItem() {
  const setCommunityModal = useSetRecoilState(CommunityModal);
  return (
    <S.HomeItemCotainer>
      <S.ProfileContainer>
        <S.ProfileImg src="" />
        <div>microsoft_hacker</div>
      </S.ProfileContainer>
      <S.ImgContainer>
        <img src={micro} alt="" />
      </S.ImgContainer>
      <S.TextContainer>
        <S.Text>
          <div>마이크로소프트 정말 신기하네요!</div>
        </S.Text>
        <S.ChatWrap>
          <img src={chat} alt="" onClick={() => setCommunityModal(true)} />
        </S.ChatWrap>
      </S.TextContainer>
    </S.HomeItemCotainer>
  );
}
