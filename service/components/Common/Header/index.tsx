import * as S from "./style";
import addListBtn from "@/public/addListBtn.svg";
import logo1 from "@/public/logo1.svg";
import Image from "next/image";

export default function Header() {
  return (
    <S.HeaderContainer>
      <Image src={logo1} alt="logi1" />
      <Image src={addListBtn} alt="list button" />
    </S.HeaderContainer>
  );
}
