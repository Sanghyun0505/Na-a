import { useCloseModal } from "@/hooks/Common/useCloseModal";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { CommunityModal } from "@/store/Community/cmmunity.store";

export default function ModalCommunity() {
  const [communityModal, setCommunityModal] = useRecoilState(CommunityModal);
  useCloseModal(setCommunityModal);
  return <S.ModalContainer></S.ModalContainer>;
}
