import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import { Container } from "../../style";
import { BabyListWrap } from "../style";
import useHideHeader from "../../../hooks/Common/useHideHeader";
import { CommunityRegistHeader } from "../../Regist/Community/style";
import backArrow from "../../../assets/backArrow.svg";
import {
  useGetBabyListId,
  useGetBabyListIdDaily,
  usePostBabyListIdDailyMutation,
} from "../../../queries/Baby/baby.query";
import { useState } from "react";
import { QueryClient } from "react-query";

export default function BabyDaily() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: listId } = useGetBabyListId(id || "");
  const { data: listIdDaily } = useGetBabyListIdDaily(id || "");
  const postDaily = usePostBabyListIdDailyMutation();
  const [date, setDate] = useState<string>("2023-06-22T07:43:30.290Z");
  const [content, setContent] = useState("");
  const queryClient = new QueryClient();
  useHideHeader();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (content === "") {
      window.alert("내용을 작성해주세요!");
      return;
    }
    if (date === null) {
      window.alert("날짜를 선택해주세요!");
      return;
    }
    if (id) {
      console.log(date, content);
      postDaily.mutateAsync(
        { id, date, content },
        {
          onSuccess: () => {
            window.alert("등록되었습니다.");
            queryClient.invalidateQueries(["/children/id/daily", id]);
            console.log(listIdDaily);
          },
        }
      );
    }
  };
  return (
    <>
      <CommunityRegistHeader>
        <img src={backArrow} alt="" onClick={() => navigate(-1)} />
      </CommunityRegistHeader>
      <Container>
        <BabyListWrap>
          <S.BabyStatusContainer>
            <S.BabyDetail>
              <S.BabyProfile src={listId?.body.profileImage || ""} />
              <div>
                <div>이름: {listId?.body.name}</div>
                <div>생일: {listId?.body.birthdate}</div>
                <div>성별: {listId?.body.gender === 0 ? "남성" : "여성"}</div>
                <div>혈액형: {listId?.body.bloodType}</div>
                <div>진단기록: {listId?.body.medicalRecords}</div>
              </div>
            </S.BabyDetail>

            <S.BabyDetailDaily>
              <input
                type="date"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDate(e.target.value)
                }
              />
              <input
                placeholder="스트링"
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setContent(e.target.value)
                }
              />
              <button onClick={handleSubmit}>제출</button>
            </S.BabyDetailDaily>
          </S.BabyStatusContainer>
        </BabyListWrap>
      </Container>
    </>
  );
}
