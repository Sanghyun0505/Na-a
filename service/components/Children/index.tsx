import { ChangeRegistAddress } from "@/store/Common/common.store";
import { CommonContainer } from "@/styles/commonStyle";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import * as S from "./style";

export default function Children() {
  const setChangeRegistAddress = useSetRecoilState(ChangeRegistAddress);

  useEffect(() => {
    setChangeRegistAddress("/ChildrenRegistPage");
  }, [setChangeRegistAddress]);
  return (
    <CommonContainer>
      <S.ChildrenWrap>
        <S.ChildrenContainer>
          <S.ChildrenListItem>
            <S.Thin />
            <S.Info>
              <S.ChildrenImage src="" alt="childImg" />
              <div>
                <S.ChildrenTitle>박상현</S.ChildrenTitle>
                <S.ChildrenSubTitle>머시기</S.ChildrenSubTitle>
              </div>
            </S.Info>
          </S.ChildrenListItem>
        </S.ChildrenContainer>
      </S.ChildrenWrap>
    </CommonContainer>
  );
}
