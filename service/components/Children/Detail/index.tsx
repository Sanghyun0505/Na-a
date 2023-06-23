import useHideHeader from "@/hooks/Common/useHideHeader";
import { customAxios } from "@/libs/Axios/customAxios";
import { CommonContainer } from "@/styles/commonStyle";
import { ChildrenListResponse } from "@/types/Children/children.type";
import { useEffect, useState } from "react";
import * as S from "./style";

interface Props {
  id: string | string[] | undefined;
}

export default function Detail({ id }: Props) {
  const [childDetailList, setChildDetailList] =
    useState<ChildrenListResponse | null>(null);
  useEffect(() => {
    const childrenDetailIdList = async () => {
      try {
        const data = await customAxios.get(`child/${id}`);
        console.log(data);
        setChildDetailList(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    childrenDetailIdList();
  }, []);
  useHideHeader();
  return (
    <>
      <S.DetailHeader></S.DetailHeader>
      <CommonContainer></CommonContainer>
    </>
  );
}
