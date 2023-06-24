import { CommonContainer } from "@/styles/commonStyle";
import { DetailHeader } from "../style";
import Image from "next/image";
import backArrow from "@/public/backArrow.svg";
import useHideHeader from "@/hooks/Common/useHideHeader";
import { useRouter } from "next/router";
import * as S from "./style";

export default function DailyId() {
  const router = useRouter();
  useHideHeader();
  return (
    <>
      <DetailHeader>
        <Image src={backArrow} alt="arrow" onClick={() => router.back()} />
        <div>2023년 6월 22일</div>
      </DetailHeader>
      <CommonContainer>
        <S.DailyImgContainer>
          <img
            src="https://m.duckyworld.co.kr/file_data/duckyworldadmin/2021/05/07/b58e8942be2a940af22d5fe8f8850c33.jpeg"
            alt="img"
          />
        </S.DailyImgContainer>
        <S.DailyContent>
          오늘도 어김없이 짱구는 언제나 개구쟁이!! 역시 아무도 못말려 하지만
          즐거워하는 표정은 언제나 사랑스러워!!
        </S.DailyContent>
      </CommonContainer>
    </>
  );
}
