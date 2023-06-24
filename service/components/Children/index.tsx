import { ChangeRegistAddress } from "@/store/Common/common.store";
import { CommonContainer } from "@/styles/commonStyle";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { customAxios } from "@/libs/Axios/customAxios";
import { ChildrenListResponse } from "@/types/Children/children.type";
import { getDateText } from "@/libs/Date/getDateText";
import { useRouter } from "next/router";
import { CHILDREN_ITEMS } from "@/constants/Children/children.constant";

export default function Children() {
  const setChangeRegistAddress = useSetRecoilState(ChangeRegistAddress);
  const [childList, setChildList] = useState<ChildrenListResponse | null>(null);
  const router = useRouter();
  useEffect(() => {
    setChangeRegistAddress("/childrenregistpage");
  }, [setChangeRegistAddress]);

  useEffect(() => {
    const getChildrenList = async () => {
      try {
        const data = await customAxios.get("/child");
        setChildList(data.data);
      } catch (e) {}
    };
    getChildrenList();
  }, []);

  return (
    <CommonContainer>
      <S.ChildrenWrap>
        <S.ChildrenContainer>
          {CHILDREN_ITEMS.map((item) => (
            <S.ChildrenListItem
              key={item.id}
              onClick={() => router.push(`childrenpage/${item.id}`)}
            >
              <S.Thin />
              <S.Info>
                <S.ChildrenImage src={item.img} alt="img" />
                <div>
                  <S.ChildrenTitle>{item.name}</S.ChildrenTitle>
                  <S.ChildrenSubTitle>{item.upload}</S.ChildrenSubTitle>
                </div>
              </S.Info>
            </S.ChildrenListItem>
          ))}
        </S.ChildrenContainer>
      </S.ChildrenWrap>
    </CommonContainer>
  );
}
