import { Container } from "../style";
import userProfile from "../../assets/userProfile.svg";
import * as S from "./style";

export default function User() {
  return <Container>
    <S.UserCenter>
      <div>
        <S.UserCenter>
        <S.UserImgDiv>
          <img src={userProfile} alt="" />
        </S.UserImgDiv>
        </S.UserCenter>
        <div>
          <S.UserProfileDiv>
            <div>
            <S.UserSpan>이름</S.UserSpan>
            <S.UserNameSpan>이름</S.UserNameSpan>
            </div>
            <div>
            <S.UserSpan>아이디</S.UserSpan>
            <S.UserIdSpan>아이디</S.UserIdSpan>
            </div>
          </S.UserProfileDiv>
        </div>
      </div>
    </S.UserCenter>
  </Container>;
}
