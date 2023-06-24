import * as S from "./style";
import addListBtn from "@/public/addListBtn.svg";
import logo1 from "@/public/logo1.svg";
import { ChangeRegistAddress, HideAddBtn } from "@/store/Common/common.store";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

export default function Header() {
  const router = useRouter();
  const changeRegistAddress = useRecoilValue(ChangeRegistAddress);
  const hideAddBtn = useRecoilValue(HideAddBtn);
  return (
    <S.HeaderContainer>
      <Image src={logo1} onClick={() => router.push("/")} alt="logi1" />
      {!hideAddBtn && (
        <Image
          src={addListBtn}
          onClick={() => router.push(changeRegistAddress)}
          alt="list button"
        />
      )}
    </S.HeaderContainer>
  );
}
