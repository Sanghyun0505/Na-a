import { useState } from "react";
import { COMMUNITAY_ITEMS } from "../../constants/Home";
import HomeItem from "./HomeItem";
import * as S from "./style";
import addListBtn from "../../assets/addListBtn.svg";
import { Container } from "../style";

export default function Home() {
  const [select, setSelect] = useState<string>("전체");

  return (
    <Container>
      <S.CategoryContainer>
        {COMMUNITAY_ITEMS.map((item) => (
          <S.Category
            key={item.id}
            isselect={select === item.name ? "true" : "false"}
            onClick={() => setSelect(item.name)}
          >
            {item.name}
          </S.Category>
        ))}
      </S.CategoryContainer>
      <S.ListWrap>
        {Array.from({ length: 5 }).map((item, idx) => (
          <HomeItem key={idx} />
        ))}
      </S.ListWrap>
      <S.Btn src={addListBtn} alt="" />
    </Container>
  );
}
