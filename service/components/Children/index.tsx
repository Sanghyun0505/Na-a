import { ChangeRegistAddress } from "@/store/Common/common.store";
import { CommonContainer } from "@/styles/commonStyle";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { customAxios } from "@/libs/Axios/customAxios";
import { ChildrenListResponse } from "@/types/Children/children.type";
import { getDateText } from "@/libs/Date/getDateText";
import { useRouter } from "next/router";

export default function Children() {
  const setChangeRegistAddress = useSetRecoilState(ChangeRegistAddress);
  const [childList, setChildList] = useState<ChildrenListResponse | null>(null);
  const router = useRouter();
  useEffect(() => {
    setChangeRegistAddress("/ChildrenRegistPage");
  }, [setChangeRegistAddress]);

  useEffect(() => {
    const getChildrenList = async () => {
      try {
        const data = await customAxios.get("/child");
        console.log(data);
        setChildList(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    getChildrenList();
  }, []);

  return (
    <CommonContainer>
      <S.ChildrenWrap>
        <S.ChildrenContainer>
          {childList?.data.map((item) => (
            <S.ChildrenListItem
              key={item._id}
              onClick={() => router.push(`ChildrenPage/${item._id}`)}
            >
              <S.Thin />
              <S.Info>
                <div>
                  <S.ChildrenTitle>{item.name}</S.ChildrenTitle>
                  <S.ChildrenSubTitle>
                    {getDateText(new Date(item.birthdate!!))}
                  </S.ChildrenSubTitle>
                </div>
              </S.Info>
            </S.ChildrenListItem>
          ))}
        </S.ChildrenContainer>
      </S.ChildrenWrap>
    </CommonContainer>
  );
}
