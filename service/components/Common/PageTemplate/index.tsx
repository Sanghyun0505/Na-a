import GlobalStyle from "@/styles/globalStyle";
import Footer from "../Footer";
import Header from "../Header";
import { useRecoilValue } from "recoil";
import { HideFooter, HideHeader } from "@/store/Common/common.store";

interface Props {
  children: React.ReactNode;
}

export default function PageTempalte({ children }: Props) {
  const hideHeader = useRecoilValue(HideHeader);
  const hideFooter = useRecoilValue(HideFooter);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <GlobalStyle />
      {!hideHeader && <Header />}
      {children}
      {!hideFooter && <Footer />}
    </div>
  );
}
