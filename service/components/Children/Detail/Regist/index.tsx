import useHideHeader from "@/hooks/Common/useHideHeader";
import { CommonContainer } from "@/styles/commonStyle";
import { useRouter } from "next/router";
import { DetailHeader } from "../style";
import Image from "next/image";
import { DailyImgContainer } from "../DailyId/style";
import backArrow from "@/public/backArrow.svg";
import check from "@/public/check.svg";
import * as S from "./style";
import uploadImg from "@/public/uploadImg.svg";

export default function Regist() {
  const router = useRouter();
  useHideHeader();
  return (
    <>
      <DetailHeader>
        <div style={{ display: "flex" }}>
          <Image src={backArrow} alt="arrow" onClick={() => router.back()} />
          <div style={{ marginTop: "3px" }}>일지 작성</div>
        </div>
        <div>
          <Image src={check} alt="" />
        </div>
      </DetailHeader>
      <CommonContainer>
        <input style={{ display: "none" }} id="file" type="file" />
        <S.ImgLabel htmlFor="file">
          <Image src={uploadImg} alt="noimg" />
        </S.ImgLabel>
        <S.DailyDate type="date" />
        <S.DailyTextArea placeholder="일지를 작성해주세요..." />
      </CommonContainer>
    </>
  );
}
