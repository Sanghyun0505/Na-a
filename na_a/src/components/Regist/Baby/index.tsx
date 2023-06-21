import { useNavigate } from "react-router-dom";
import { COMMUNITAY_ITEMS } from "../../../constants/Home";
import { Category, CategoryContainer } from "../../Home/style";
import { Container } from "../../style";
import * as S from "../Community/style";
import useHideHeader from "../../../hooks/Common/useHideHeader";
import { useState } from "react";
import backArrow from "../../../assets/backArrow.svg";
import postListBtn from "../../../assets/postListBtn.svg";
import imgUpload from "../../../assets/imgUpload.svg";
import { Daily, DailyContainer, DailyInput, Input } from "./style";

export default function Baby() {
  const navigate = useNavigate();
  useHideHeader();
  const [postImg, setPostImg] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [select, setSelect] = useState<string>("전체");
  return (
    <>
      <S.CommunityRegistHeader>
        <S.BackArrowContainer>
          <img src={backArrow} alt="" onClick={() => navigate(-1)} />
          <div>새 일지</div>
        </S.BackArrowContainer>
        <S.PostListBtnContainer>
          <img src={postListBtn} alt="" />
        </S.PostListBtnContainer>
      </S.CommunityRegistHeader>
      <Container>
        <input id="file" type="file" style={{ display: "none" }} />
        <S.PostImgLabel htmlFor="file">
          <img src={imgUpload} alt="" />
        </S.PostImgLabel>

        <DailyContainer>
          <div>
            <div>날짜</div>
            <Input placeholder="입력... ex) 2023년 6월 22일" />
          </div>
          <div>
            <div>건강상태</div>
            <Input placeholder="입력..." />
          </div>
          <div>
            <div>알레르기</div>
            <Input placeholder="입력..." />
          </div>
          <div>
            <div>복용중인 약</div>
            <Input placeholder="입력..." />
          </div>
          <div>
            <div>혈액형</div>
            <Input placeholder="입력..." />
          </div>
          <div>
            <div>기타</div>
            <Input placeholder="입력..." />
          </div>
        </DailyContainer>
      </Container>
    </>
  );
}
