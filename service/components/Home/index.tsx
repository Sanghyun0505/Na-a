import Image from "next/image";
import * as S from "./style";
import { CommonContainer } from "@/styles/commonStyle";
import chat from "@/public/chat.svg";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { ChangeRegistAddress } from "@/store/Common/common.store";
import useTokenCheck from "@/hooks/Auth/useTokenCheck";
import { CommunityModal } from "@/store/Community/cmmunity.store";

export default function Home() {
  const setChangeRegistAddress = useSetRecoilState(ChangeRegistAddress);
  const setCommunityModal = useSetRecoilState(CommunityModal);
  useEffect(() => {
    setChangeRegistAddress("/CommunityRegistPage");
  }, [setChangeRegistAddress]);
  useTokenCheck();
  return (
    <CommonContainer>
      <S.HomeWrap>
        <S.HomeCotainer>
          <S.ListProfileContainer>
            <S.Profile>
              <Image src="" alt="Image" />
              <div>Sanghyun0505</div>
            </S.Profile>
            <S.Category>FREE</S.Category>
          </S.ListProfileContainer>
          <S.ListImgContainer>
            <S.ListImg src="" alt="listImg" />
          </S.ListImgContainer>
          <S.ListContentContainer>
            <S.Text>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                실시간 야붕이
              </div>
              <div>반갑노</div>
            </S.Text>
            <S.ChatWrap onClick={() => setCommunityModal(true)}>
              <S.ChatImg src={chat} alt="chat" />
            </S.ChatWrap>
          </S.ListContentContainer>
        </S.HomeCotainer>
      </S.HomeWrap>
    </CommonContainer>
  );
}
