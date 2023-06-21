import { ReactNode } from "react";
import GlobalStyle from "../../../styles/globalStyle";
import Footer from "../Footer";
import Header from "../Header";
import { useRecoilValue } from "recoil";
import { HideHeader } from "../../../store/Common/common.store";

interface Props {
  children: ReactNode;
}

export default function PageTemplate({ children }: Props) {
  const hideHeader = useRecoilValue(HideHeader);
  return (
    <>
      <GlobalStyle />
      {!hideHeader && <Header />}
      {children}
      <Footer />
    </>
  );
}
