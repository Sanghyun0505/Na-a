import { useLocation, useNavigate } from "react-router-dom";
import { FOOTER_ITEMS } from "../../../constants/Common/common.constant";
import * as S from "./style";

export default function Footer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <S.FooterContainer>
      {FOOTER_ITEMS.map((item) => (
        <img
          key={item.id}
          src={pathname === item.link ? item.selectImg : item.img}
          alt=""
          onClick={() => navigate(item.link)}
        />
      ))}
    </S.FooterContainer>
  );
}
