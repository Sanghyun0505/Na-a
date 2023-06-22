import * as S from "./style";
import micro from "../../../assets/micro.svg";
import chat from "../../../assets/chat.svg";
import { useSetRecoilState } from "recoil";
import { CommunityModal } from "../../../store/Modal/modal.store";
import { CommunityListResponse } from "../../../types/Community/community.type";
import { CommunityId } from "../../../store/Community/community.store";
import { getTimeAgo } from "../../../libs/Date/getTimeAgo";

interface Props {
  data: CommunityListResponse;
}

export default function HomeItem({ data }: Props) {
  const setCommunityModal = useSetRecoilState(CommunityModal);
  const setCommunityId = useSetRecoilState(CommunityId);
  return (
    <S.HomeItemCotainer key={data?.id}>
      <S.ProfileContainer>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <S.ProfileImg src={data?.user?.profileImage} />
          <div >
            {data?.user?.userid} ·{" "}
            <span style={{ color: "gray", fontSize: "12px" }}>
              {getTimeAgo(new Date(data.createdAt))}
            </span>
          </div>
        </div>
        <S.ChoisedCategory>
          <div>{data.category}</div>
        </S.ChoisedCategory>
      </S.ProfileContainer>
      <S.ImgContainer>
        <img src={data?.user?.profileImage} alt="" />
      </S.ImgContainer>
      <S.TextContainer>
        <S.Text>
          <div style={{ fontSize: "18px", fontWeight: "bold" }}>
            {data?.title}
          </div>
          <div>{data?.content}</div>
        </S.Text>
        <S.ChatWrap>
          <img
            src={chat}
            alt=""
            onClick={async () => {
              await setCommunityId(data?.id);
              setCommunityModal(true);
            }}
          />
        </S.ChatWrap>
      </S.TextContainer>
    </S.HomeItemCotainer>
  );
}
