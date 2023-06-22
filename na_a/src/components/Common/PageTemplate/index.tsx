import { ReactNode } from "react";
import GlobalStyle from "../../../styles/globalStyle";
import Footer from "../Footer";
import Header from "../Header";
import { useRecoilValue } from "recoil";
import { HideFooter, HideHeader } from "../../../store/Common/common.store";
import { CommunityModal } from "../../../store/Modal/modal.store";
import ModalCommunity from "../Modal/Community";

interface Props {
  children: ReactNode;
}

export default function PageTemplate({ children }: Props) {
  const hideHeader = useRecoilValue(HideHeader);
  const hideFooter = useRecoilValue(HideFooter);
  const communityModal = useRecoilValue(CommunityModal);
  return (
    <>
      <GlobalStyle />
      {communityModal && <ModalCommunity />}
      {!hideHeader && <Header />}
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
