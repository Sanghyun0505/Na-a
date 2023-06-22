import { Container } from "../style";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useGetBabyList } from "../../queries/Baby/baby.query";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { ChangeRegistAddress } from "../../store/Common/common.store";

export default function Baby() {
  const navigate = useNavigate();
  const { data } = useGetBabyList();
  const setChangeRegistAddress = useSetRecoilState(ChangeRegistAddress);

  useEffect(() => {
    setChangeRegistAddress("/babycare/regist");
  }, [setChangeRegistAddress]);
  return (
    <Container>
      <S.BabyListWrap>
        <S.BabyListContainer>
          {data?.body.map((item) => (
            <S.BabyListItem
              key={item.id}
              onClick={() => navigate(`/babycare/${item.id}`)}
            >
              
            </S.BabyListItem>
          ))}
          <S.BabyListItem />
        </S.BabyListContainer>
      </S.BabyListWrap>
    </Container>
  );
}
