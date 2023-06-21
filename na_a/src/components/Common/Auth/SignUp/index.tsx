import * as S from "./style";
import uploadProfile from "../../../../assets/uploadProfile.svg";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  return (
    <S.SignUpCenter>
      <div>
        <S.SignUpCenter>
          <S.SignUpImgDiv>
            <input id="file" type="file" />
            <label htmlFor="file">
              <img src={uploadProfile} alt="" />
            </label>
          </S.SignUpImgDiv>
        </S.SignUpCenter>
        <div>
          <S.SignUpP>이름</S.SignUpP>
          <S.SignUpInputBox type="text" />
        </div>
        <div>
          <S.SignUpP>아이디</S.SignUpP>
          <S.SignUpInputBox type="text" />
        </div>
        <div>
          <S.SignUpP>비밀번호</S.SignUpP>
          <S.SignUpInputBox type="password" />
        </div>
        <S.SignUpButton>회원가입</S.SignUpButton>
        <div>
          <S.SignUpSpan>이미 계정이 있으신가요?</S.SignUpSpan>
          <S.SignUpDiv onClick={() => navigate("/login")}>로그인</S.SignUpDiv>
        </div>
      </div>
    </S.SignUpCenter>
  );
}

export default SignUp;
