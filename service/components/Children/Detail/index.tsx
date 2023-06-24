import useHideHeader from "@/hooks/Common/useHideHeader";
import { customAxios } from "@/libs/Axios/customAxios";
import { CommonContainer } from "@/styles/commonStyle";
import * as S from "../style";
import {
  ChildrenInfo,
  ChildrenInfoContainer,
  ChildrenSubInfo,
  ChildrenSubTitle,
  DetailHeader,
} from "./style";
import { useRouter } from "next/router";
import { CHILD_ITEMS } from "@/constants/Children/children.constant";
import Image from "next/image";
import backArrow from "@/public/backArrow.svg";
import addListBtn from "@/public/addListBtn.svg";

interface Props {
  id: string | string[] | undefined;
}

export default function Detail({ id }: Props) {
  const router = useRouter();
  useHideHeader();
  return (
    <>
      <DetailHeader>
        <div style={{ display: "flex" }}>
          <Image src={backArrow} alt="arrow" onClick={() => router.back()} />
          <div style={{ marginTop: "3px" }}>신짱구의 일지</div>
        </div>
        <div>
          <Image
            src={addListBtn}
            alt="add"
            style={{ marginTop: "5px" }}
            onClick={() => router.push(`/childrenpage/${id}/daily/regist`)}
          />
        </div>
      </DetailHeader>
      <CommonContainer>
        <S.ChildrenWrap>
          <ChildrenInfoContainer>
            <ChildrenInfo>
              <li>
                <ChildrenSubTitle>이름</ChildrenSubTitle>
                <ChildrenSubInfo>신짱구</ChildrenSubInfo>
              </li>
              <li>
                <ChildrenSubTitle>생일</ChildrenSubTitle>
                <ChildrenSubInfo>1994년 5월 5일</ChildrenSubInfo>
              </li>
              <li>
                <ChildrenSubTitle>성별</ChildrenSubTitle>
                <ChildrenSubInfo>남자</ChildrenSubInfo>
              </li>
              <li>
                <ChildrenSubTitle>혈액형</ChildrenSubTitle>
                <ChildrenSubInfo>B형</ChildrenSubInfo>
              </li>
            </ChildrenInfo>
          </ChildrenInfoContainer>
          {CHILD_ITEMS.map((item) => (
            <S.ChildrenContainer
              key={item.id}
              onClick={() =>
                router.push(
                  `http://localhost:3000/childrenpage/${id}/daily/${item.id}`
                )
              }
            >
              <S.ChildrenListItem>
                <S.Thin />
                <S.Info>
                  <S.ChildrenImage src={item.img} alt="img" />
                  <div>
                    <S.ChildrenTitle>{item.date}</S.ChildrenTitle>
                    <S.ChildrenSubTitle>더보기</S.ChildrenSubTitle>
                  </div>
                </S.Info>
              </S.ChildrenListItem>
            </S.ChildrenContainer>
          ))}
        </S.ChildrenWrap>
      </CommonContainer>
    </>
  );
}
