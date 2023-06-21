import { Btn } from "../Home/style";
import { Container } from "../style";
import * as S from "./style";
import addListBtn from "../../assets/addListBtn.svg";
import { useNavigate } from "react-router-dom";

export default function Baby() {
  const navigate = useNavigate();
  return (
    <Container>
      <S.BabyListWrap>
        <S.BabyListContainer>
          {Array.from({ length: 10 }).map((item, idx) => (
            <S.BabyListItem key={idx}>
              <S.BabyAble />
              <S.BabyList>
                <img src="" alt="" />
                <div>
                  <div>해커그라운드</div>
                  <S.BabySubTitle>2023년 6월 22일</S.BabySubTitle>
                </div>
              </S.BabyList>
            </S.BabyListItem>
          ))}
        </S.BabyListContainer>
      </S.BabyListWrap>
      <Btn
        src={addListBtn}
        onClick={() => navigate("/babycare/regist")}
        alt=""
      />
    </Container>
  );
}
