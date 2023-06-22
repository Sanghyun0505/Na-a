import Image from "next/image";
import * as S from "./style";
import { CommonContainer } from "@/styles/commonStyle";
import chat from "@/public/chat.svg";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { ChangeRegistAddress } from "@/store/Common/common.store";

export default function Home() {
  const setChangeRegistAddress = useSetRecoilState(ChangeRegistAddress);

  useEffect(() => {
    setChangeRegistAddress("/CommunityRegistPage");
  }, [setChangeRegistAddress]);

  return (
    <CommonContainer>
      <S.HomeWrap>
        <S.HomeCotainer>
          <S.ListProfileContainer>
            <S.Profile>
              <Image src="" alt="" />
              <div>Sanghyun0505</div>
            </S.Profile>
            <S.Category>FREE</S.Category>
          </S.ListProfileContainer>
          <S.ListImgContainer>
            <S.ListImg src="" alt="" />
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
            <S.ChatWrap>
              <S.ChatImg src={chat} alt="" />
            </S.ChatWrap>
          </S.ListContentContainer>
        </S.HomeCotainer>
      </S.HomeWrap>
    </CommonContainer>
  );
}
