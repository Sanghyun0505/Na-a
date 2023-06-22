import * as S from "./style";
import addListBtn from "../../../assets/addListBtn.svg";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ChangeRegistAddress } from "../../../store/Common/common.store";
import logo from "../../../assets/logo.svg";

export default function Header() {
  const navigate = useNavigate();
  const changeRegistAddress = useRecoilValue(ChangeRegistAddress);
  return (
    <S.HeaderContainer>
      <img src={logo} />
      <S.Btn
        src={addListBtn}
        onClick={() => navigate(changeRegistAddress)}
        alt=""
      />
    </S.HeaderContainer>
  );
}
