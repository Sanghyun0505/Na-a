import Image from "next/image";
import * as S from "./style";
import { CommonContainer } from "@/styles/commonStyle";
import chat from "@/public/chat.svg";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { ChangeRegistAddress } from "@/store/Common/common.store";
import useTokenCheck from "@/hooks/Auth/useTokenCheck";
import {
  CommunityCommentId,
  CommunityModal,
} from "@/store/Community/cmmunity.store";
import { customAxios } from "@/libs/Axios/customAxios";
import { CommunityListReponse } from "@/types/Community/community.type";
import hackerGround from "@/public/hackerGround.svg";
import { HOME_ITEMS } from "@/constants/Home/home.constant";

export default function Home() {
  const setChangeRegistAddress = useSetRecoilState(ChangeRegistAddress);
  const setCommunityModal = useSetRecoilState(CommunityModal);
  const setCommunityCommentId = useSetRecoilState(CommunityCommentId);
  const [commuList, setCommuList] = useState<CommunityListReponse | null>(null);
  useEffect(() => {
    setChangeRegistAddress("/communityregistpage");
  }, [setChangeRegistAddress]);
  useTokenCheck();

  useEffect(() => {
    const getCommunityList = async () => {
      try {
        const { data } = await customAxios.get("/community");
        setCommuList(data);
      } catch (e) {}
    };
    getCommunityList();
  }, []);

  return (
    <CommonContainer>
      <S.HomeWrap>
        {HOME_ITEMS.map((item) => (
          <S.HomeCotainer key={item.id}>
            <S.ListProfileContainer>
              <S.Profile>
                <Image src={hackerGround} alt="Image" />
                <div>{item.userid}</div>
              </S.Profile>
              <S.Category>{item.category}</S.Category>
            </S.ListProfileContainer>

            <S.ListImgContainer>
              <S.ListImg src={item.images} alt="listImg" />
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
                  {item.title}
                </div>
                <div>{item.content}</div>
              </S.Text>
              <S.ChatWrap
                onClick={async () => {
                  await setCommunityCommentId("1");
                  setCommunityModal(true);
                }}
              >
                <S.ChatImg src={chat} alt="chat" />
              </S.ChatWrap>
            </S.ListContentContainer>
          </S.HomeCotainer>
        ))}
      </S.HomeWrap>
    </CommonContainer>
  );
}
