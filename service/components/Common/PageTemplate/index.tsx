import GlobalStyle from "@/styles/globalStyle";
import Footer from "../Footer";
import Header from "../Header";
import { useRecoilValue } from "recoil";
import { HideFooter, HideHeader } from "@/store/Common/common.store";
import { CommunityModal } from "@/store/Community/cmmunity.store";
import ModalCommunity from "../Modal/Community";

interface Props {
  children: React.ReactNode;
}

export default function PageTempalte({ children }: Props) {
  const hideHeader = useRecoilValue(HideHeader);
  const hideFooter = useRecoilValue(HideFooter);
  const communityModal = useRecoilValue(CommunityModal);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <GlobalStyle />
      {communityModal && <ModalCommunity />}
      {!hideHeader && <Header />}
      {children}
      {!hideFooter && <Footer />}
    </div>
  );
}
