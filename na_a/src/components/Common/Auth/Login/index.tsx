import { useLogin } from "../../../../hooks/Auth/useLogin";
import useHideFooter from "../../../../hooks/Common/useHideFooter";
import useHideHeader from "../../../../hooks/Common/useHideHeader";
import { SignUpCenter } from "../SignUp/style";
import * as L from "./style";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { handleChange, userid, password, handleSubmit } = useLogin();
  useHideFooter();
  useHideHeader();
  return (
    <SignUpCenter>
      <div>
        <L.LoginLogoP>logo</L.LoginLogoP>
        <div>
          <L.LoginP>아이디</L.LoginP>
          <L.LoginInputBox
            type="text"
            value={userid}
            name="userid"
            placeholder="아이디를 입력하세요."
            onChange={handleChange}
          />
        </div>
        <div>
          <L.LoginP>비밀번호</L.LoginP>
          <L.LoginInputBox
            type="password"
            value={password}
            name="password"
            placeholder="비밀번호를 입력하세요."
            onChange={handleChange}
          />
        </div>
        <L.LoginButton onClick={handleSubmit}>로그인</L.LoginButton>
        <div>
          <L.LoginSpan>아직 계정이 없으신가요?</L.LoginSpan>
          <L.LoginDiv onClick={() => navigate("/signup")}>회원가입</L.LoginDiv>
        </div>
      </div>
    </SignUpCenter>
  );
}

export default Login;
