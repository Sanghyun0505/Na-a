import { FOOTER_ITEMS } from "@/constants/Common/common.constant";
import * as S from "./style";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <S.FooterContainer>
      {FOOTER_ITEMS.map((item) => (
        <S.FooterImage
          src={router.pathname === item.link ? item.selectImg : item.img}
          onClick={() => router.push(item.link)}
          key={item.id}
          alt=""
        />
      ))}
    </S.FooterContainer>
  );
}
