import useHideHeader from "@/hooks/Common/useHideHeader";
import { CommonContainer } from "@/styles/commonStyle";
import * as S from "./style";
import Image from "next/image";
import backArrow from "@/public/backArrow.svg";
import { useRouter } from "next/router";

export default function ChildrenRegist() {
  const router = useRouter();
  useHideHeader();
  return (
    <>
      <S.ChildrenRegistHeader>
        <Image src={backArrow} onClick={() => router.back()} alt="arrow" />
      </S.ChildrenRegistHeader>
      <CommonContainer>아이등록페이지</CommonContainer>
    </>
  );
}
