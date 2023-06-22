import useHideFooter from "@/hooks/Common/useHideFooter";
import * as S from "../style";
import useHideHeader from "@/hooks/Common/useHideHeader";
import Image from "next/image";
import logo2 from "@/public/logo2.svg";
import { useSignIn } from "@/hooks/Auth/useSignIn";
import { useRouter } from "next/router";

export default function SignIn() {
  const { handleSignInChange, handleSignInSubmit, userid, password } =
    useSignIn();
  const router = useRouter();
  useHideHeader();
  useHideFooter();
  return (
    <S.AuthContainer>
      <S.AuthForm onSubmit={handleSignInSubmit} auth={"75px"}>
        <S.LogoContainer>
          <Image src={logo2} alt="" />
        </S.LogoContainer>
        <div>
          <S.Title>아이디</S.Title>
          <S.AuthInput
            placeholder="아이디를 입력해주세요."
            type="text"
            name="userid"
            value={userid}
            onChange={handleSignInChange}
          />
        </div>
        <div>
          <S.Title>비밀번호</S.Title>
          <S.AuthInput
            placeholder="비밀번호를 입력해주세요."
            type="password"
            name="password"
            value={password}
            onChange={handleSignInChange}
          />
        </div>
        <S.AuthButton type="submit">로그인</S.AuthButton>
        <S.AuthIsAccount>
          계정이 없으신가요?{" "}
          <span onClick={() => router.push("/SignUpPage")}>회원가입하기</span>
        </S.AuthIsAccount>
      </S.AuthForm>
    </S.AuthContainer>
  );
}
