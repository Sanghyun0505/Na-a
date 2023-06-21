import * as S from "./style";
import micro from "../../../assets/micro.svg";
import chat from "../../../assets/chat.svg";

export default function HomeItem() {
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
          <img src={chat} />
        </S.ChatWrap>
      </S.TextContainer>
    </S.HomeItemCotainer>
  );
}
