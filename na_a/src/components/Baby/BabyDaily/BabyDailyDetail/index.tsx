import { useParams } from "react-router-dom";
import { Container } from "../../../style";
import * as S from "./style";

export default function BabyDailyDetail() {
  const { id } = useParams();
  return (
    <Container>
      <S.DetailWrap>
        {Array.from({ length: 20 }).map((item, idx) => (
          <S.DetailItem key={idx}>
            <S.DetailImgContainer>
              <img src="" alt="" />
            </S.DetailImgContainer>
          </S.DetailItem>
        ))}
      </S.DetailWrap>
    </Container>
  );
}
