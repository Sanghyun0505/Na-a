import useHideFooter from "@/hooks/Common/useHideFooter";
import * as S from "../style";
import useHideHeader from "@/hooks/Common/useHideHeader";
import Image from "next/image";
import logo2 from "@/public/logo2.svg";
import { useSignUp } from "@/hooks/Auth/useSignUp";

export default function SignUp() {
  useHideHeader();
  useHideFooter();
  const {
    name,
    userid,
    password,
    passwordChk,
    type,
    handleSignUpChange,
    handleSignUpSubmit,
  } = useSignUp();
  return (
    <S.AuthContainer>
      <S.AuthForm onSubmit={handleSignUpSubmit} auth={"35px"}>
        <S.LogoContainer>
          <Image src={logo2} alt="" />
        </S.LogoContainer>
        <div>
          <S.Title>이름</S.Title>
          <S.AuthInput
            placeholder="이름을 입력해주세요."
            type="text"
            name="name"
            value={name}
            onChange={handleSignUpChange}
          />
        </div>
        <div>
          <S.Title>아이디</S.Title>
          <S.AuthInput
            placeholder="아이디를 입력해주세요."
            type="text"
            name="userid"
            value={userid}
            onChange={handleSignUpChange}
          />
        </div>
        <div>
          <S.Title>비밀번호</S.Title>
          <S.AuthInput
            placeholder="비밀번호를 입력해주세요."
            type="password"
            name="password"
            value={password}
            onChange={handleSignUpChange}
          />
        </div>
        <div>
          <S.Title>비밀번호 확인</S.Title>
          <S.AuthInput
            placeholder="비밀번호를 입력해주세요."
            type="password"
            name="passwordChk"
            value={passwordChk}
            onChange={handleSignUpChange}
          />
        </div>
        <div>
          <S.Title>성별</S.Title>
          <S.AuthInput
            placeholder="성별을 입력해주세요. ex) 남성, 여성"
            type="text"
            name="type"
            value={type}
            onChange={handleSignUpChange}
          />
        </div>
        <S.AuthButton type="submit">회원가입</S.AuthButton>
      </S.AuthForm>
    </S.AuthContainer>
  );
}
