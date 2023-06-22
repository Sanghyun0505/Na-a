import useHideFooter from "@/hooks/Common/useHideFooter";
import * as S from "../style";
import useHideHeader from "@/hooks/Common/useHideHeader";
import Image from "next/image";
import logo2 from "@/public/logo2.svg";
import { useSignUp } from "@/hooks/Auth/useSignUp";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();
  useHideHeader();
  useHideFooter();
  const {
    username,
    userid,
    password,
    passwordChk,
    type,
    handleSignUpChange,
    handleSignUpSubmit,
  } = useSignUp();
  return (
    <S.AuthContainer>
      <S.AuthForm onSubmit={handleSignUpSubmit} auth={"25px"}>
        <S.LogoContainer>
          <Image src={logo2} alt="logo2" />
        </S.LogoContainer>
        <div>
          <S.Title>이름</S.Title>
          <S.AuthInput
            placeholder="이름을 입력해주세요."
            type="text"
            name="username"
            value={username}
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
            placeholder="엄마 아빠를 입력해주세요."
            type="text"
            name="type"
            value={type}
            onChange={handleSignUpChange}
          />
        </div>
        <S.AuthButton type="submit">회원가입</S.AuthButton>
        <S.AuthIsAccount>
          계정이 있으신가요?{" "}
          <span onClick={() => router.push("/SignInPage")}>로그인하기</span>
        </S.AuthIsAccount>
      </S.AuthForm>
    </S.AuthContainer>
  );
}
