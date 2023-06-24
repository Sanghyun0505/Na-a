import { useRouter } from "next/router";
import * as S from "./style";
import { FESTIVAL_ITEM } from "@/constants/Festival/festival.constant";

export default function FestivalItem() {
  const router = useRouter();
  return (
    <>
      {FESTIVAL_ITEM.map((item) => (
        <S.FestivalItemBox
          key={item.id}
          onClick={() => router.push(`/festivalpage/${item.id}`)}
        >
          <S.FesitvalThin />
          <S.FestivalInfo>
            <S.FestivalImg src={item.image} alt="festival" />
            <S.FestivalTitleAndPeriod>
              <div>{item.name}</div>
              <S.FesitvalPeriod>{item.period}</S.FesitvalPeriod>
            </S.FestivalTitleAndPeriod>
          </S.FestivalInfo>
        </S.FestivalItemBox>
      ))}
    </>
  );
}
