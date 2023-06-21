import { useNavigate } from "react-router-dom";
import { FOOTER_ITEMS } from "../../../constants/Common/common.constant";
import * as S from "./style";
import { useState } from "react";

export default function Footer() {
  const navigate = useNavigate();
  const [select, setSelect] = useState("/");

  const handleClick = (link: string) => {
    setSelect(link);
    navigate(link);
  };

  return (
    <S.FooterContainer>
      {FOOTER_ITEMS.map((item) => (
        <img
          key={item.id}
          src={select === item.link ? item.selectImg : item.img}
          alt=""
          onClick={() => handleClick(item.link)}
        />
      ))}
    </S.FooterContainer>
  );
}
