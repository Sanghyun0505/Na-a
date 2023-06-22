import * as S from "./style";
import { useNavigate } from "react-router-dom";
import useHideHeader from "../../../../hooks/Common/useHideHeader";
import useHideFooter from "../../../../hooks/Common/useHideFooter";
import { useSignUp } from "../../../../hooks/Auth/useSignUp";
import { LoginLogoP } from "../Login/style";

function SignUp() {
  const navigate = useNavigate();
  const {
    userid,
    username,
    password,
    type,
    handleChange,
    handleSubmit,
    setType,
  } = useSignUp();
  useHideHeader();
  useHideFooter();
  return (
    <S.SignUpCenter>
      <div>
        <LoginLogoP>logo</LoginLogoP>
        <div>
          <S.SignUpP>이름</S.SignUpP>
          <S.SignUpInputBox
            type="text"
            name="username"
            value={username}
            placeholder="이름을 입력하세요"
            onChange={handleChange}
          />
        </div>
        <div>
          <S.SignUpP>아이디</S.SignUpP>
          <S.SignUpInputBox
            type="text"
            name="userid"
            value={userid}
            placeholder="아이디를 입력하세요"
            onChange={handleChange}
          />
        </div>
        <div>
          <S.SignUpP>비밀번호</S.SignUpP>
          <S.SignUpInputBox
            type="password"
            name="password"
            value={password}
            placeholder="비밀번호를 입력하세요"
            onChange={handleChange}
          />
        </div>
        <div>
          <S.SignUpP>성별</S.SignUpP>
          <S.SignUpInputBox
            type="text"
            placeholder="ex) male, female"
            name="type"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setType(e.target.value)
            }
            value={type}
          />
        </div>
        <S.SignUpButton onClick={handleSubmit}>회원가입</S.SignUpButton>
        <div>
          <S.SignUpSpan>이미 계정이 있으신가요?</S.SignUpSpan>
          <S.SignUpDiv onClick={() => navigate("/login")}>로그인</S.SignUpDiv>
        </div>
      </div>
    </S.SignUpCenter>
  );
}

export default SignUp;
