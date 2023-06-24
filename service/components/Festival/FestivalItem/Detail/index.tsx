import { CommonContainer } from "@/styles/commonStyle";
import * as S from "./style";
import backArrow from "@/public/backArrow.svg";
import useHideHeader from "@/hooks/Common/useHideHeader";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  id: string | string[] | undefined;
}

export default function Detail({ id }: Props) {
  useHideHeader();
  const router = useRouter();
  return (
    <>
      <S.DetailHeader>
        <Image
          src={backArrow}
          onClick={() => router.back()}
          alt="arrow"
          style={{ cursor: "pointer" }}
        />
      </S.DetailHeader>
      <CommonContainer>
        <S.DetailImgContainer>
          <img
            src="https://all-mice.co.kr/data/poster/2305/6819.jpg?v=1683673316"
            alt="img"
          />
        </S.DetailImgContainer>
        <S.DetailInfoContainer>
          <S.FestivalTitle>
            <S.SubTitle istitle={"true"}>포항국제불빛축제</S.SubTitle>
            <S.FestivalMore>더보기</S.FestivalMore>
          </S.FestivalTitle>
          <S.FestivalInfoContainer>
            <ul>
              <li>
                <S.SubTitle>주소</S.SubTitle>
                <S.SubInfo>경북 포항시 남구 해도동 115-1</S.SubInfo>
              </li>
              <li>
                <S.SubTitle>축제기간</S.SubTitle>
                <S.SubInfo>2023.05.26 ~ 2023.05.28</S.SubInfo>
              </li>
              <li>
                <S.SubTitle>문의</S.SubTitle>
                <S.SubInfo>054-270-2243</S.SubInfo>
              </li>
              <li>
                <S.SubTitle>주최</S.SubTitle>
                <S.SubInfo>포항시/포항문화재단</S.SubInfo>
              </li>
            </ul>
          </S.FestivalInfoContainer>
        </S.DetailInfoContainer>
      </CommonContainer>
    </>
  );
}
