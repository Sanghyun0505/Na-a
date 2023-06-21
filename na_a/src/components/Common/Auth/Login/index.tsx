import * as L from "./style";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <L.LoginCenter>
      <div>
        <L.LoginCenter>
          <L.LoginLogoP>logo</L.LoginLogoP>
        </L.LoginCenter>
        <div>
          <L.LoginP>아이디</L.LoginP>
          <L.LoginInputBox type="text" />
        </div>
        <div>
          <L.LoginP>비밀번호</L.LoginP>
          <L.LoginInputBox type="password" />
        </div>
        <L.LoginButton>로그인</L.LoginButton>
        <div>
          <L.LoginSpan>아직 계정이 없으신가요?</L.LoginSpan>
          <L.LoginDiv onClick={() => navigate("/signup")}>회원가입</L.LoginDiv>
        </div>
      </div>
    </L.LoginCenter>
  );
}

export default Login;
