import { CommonContainer } from "@/styles/commonStyle";
import * as S from "./style";
import FestivalItem from "./FestivalItem";
import { useHideAddBtn } from "@/hooks/Common/useHideAddBtn";

export default function Festival() {
  useHideAddBtn();
  return (
    <CommonContainer>
      <S.FestivalWrap>
        <S.FesitvalItemContainer>
          <FestivalItem />
        </S.FesitvalItemContainer>
      </S.FestivalWrap>
    </CommonContainer>
  );
}
