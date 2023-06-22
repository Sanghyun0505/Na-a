import HomeItem from "./HomeItem";
import * as S from "./style";
import { Container } from "../style";
import useTokenCheck from "../../hooks/Auth/useTokenCheck";
import { useGetCommunityQuery } from "../../queries/Community/community.query";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { ChangeRegistAddress } from "../../store/Common/common.store";

export default function Home() {
  const { data: Home } = useGetCommunityQuery();
  const setChangeRegistAddress = useSetRecoilState(ChangeRegistAddress);

  useEffect(() => {
    setChangeRegistAddress("/community/regist");
  }, [setChangeRegistAddress]);

  useTokenCheck();
  return (
    <Container>
      <S.ListWrap>
        {Home?.body.map((item) => (
          <HomeItem data={item} key={item.id} />
        ))}
      </S.ListWrap>
    </Container>
  );
}
