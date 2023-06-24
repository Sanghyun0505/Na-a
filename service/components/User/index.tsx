import { CommonContainer } from "@/styles/commonStyle";
import * as S from "./style";
import { useLogout } from "@/hooks/Common/useLogout";

export default function User() {
  const { handleLogout } = useLogout();
  return (
    <CommonContainer>
      <S.UserContainer>
        <img
          src="https://i.namu.wiki/i/grvIWLSan_q2O_fRzfHvzjK8IoAb_VembUt57vIY5azucVJKRjjy1tUZ8yJ-v2AwPKIN1oZUZ4Fy8A2Yf8OuGA.webp"
          alt="프로필"
        />
        <S.UserAbleContainer>
          <S.UserInfoContainer>
            <li>
              <S.InfoTitle>이름</S.InfoTitle>
              <S.Info>신형식 아빠</S.Info>
            </li>
            <li>
              <S.InfoTitle>아이디</S.InfoTitle>
              <S.Info>terribleFootSmell55</S.Info>
            </li>
            <li>
              <S.InfoTitle>동반자</S.InfoTitle>
              <S.Info>봉미선</S.Info>
            </li>
            <li>
              <S.InfoTitle>자녀</S.InfoTitle>
              <S.Info>신짱구, 신짱아</S.Info>
            </li>
          </S.UserInfoContainer>
          <S.UserEditAndLogout isedit={"true"}>수정하기</S.UserEditAndLogout>
          <S.UserEditAndLogout onClick={handleLogout}>
            로그아웃
          </S.UserEditAndLogout>
        </S.UserAbleContainer>
      </S.UserContainer>
    </CommonContainer>
  );
}
