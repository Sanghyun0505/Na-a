import { useNavigate } from "react-router-dom";
import { Container } from "../../style";
import * as S from "../Community/style";
import useHideHeader from "../../../hooks/Common/useHideHeader";
import backArrow from "../../../assets/backArrow.svg";
import postListBtn from "../../../assets/postListBtn.svg";
import imgUpload from "../../../assets/imgUpload.svg";
import { Daily, DailyContainer, Input } from "./style";
import { useBabyDaily } from "../../../hooks/Baby/useBabyDaily";

export default function Baby() {
  const navigate = useNavigate();
  useHideHeader();
  const {
    name,
    gender,
    handleArrayChange,
    handleImgChange,
    birth,
    height,
    weight,
    bloodType,
    img,
    handleChange,
    handleSubmit,
  } = useBabyDaily();
  return (
    <>
      <S.CommunityRegistHeader>
        <S.BackArrowContainer>
          <img src={backArrow} alt="" onClick={() => navigate(-1)} />
          <div>아이 등록</div>
        </S.BackArrowContainer>
        <S.PostListBtnContainer>
          <img src={postListBtn} alt="" onClick={handleSubmit} />
        </S.PostListBtnContainer>
      </S.CommunityRegistHeader>
      <Container>
        <div>
          <input
            id="file"
            type="file"
            style={{ display: "none" }}
            name="profileImage"
            onChange={handleImgChange}
          />
          <S.PostImgLabel htmlFor="file">
            <S.Img src={img ? img : imgUpload} alt="" isimg={img} />
          </S.PostImgLabel>
        </div>
        <DailyContainer>
          <Daily>
            <div>
              <div>생일</div>
              <Input
                type="date"
                value={birth.toString()}
                name="birthdate"
                onChange={handleArrayChange}
                min="2023-06-22"
              />
            </div>
            <div>
              <div>이름</div>
              <Input
                type="text"
                placeholder="입력..."
                value={name}
                name="name"
                onChange={handleChange}
              />
            </div>
            <div>
              <div>성별</div>
              <Input
                type="text"
                placeholder="입력..."
                value={gender}
                name="gender"
                onChange={handleArrayChange}
              />
            </div>
            <div>
              <div>키</div>
              <Input
                type="text"
                placeholder="입력... "
                value={height}
                name="height"
                onChange={handleArrayChange}
              />
            </div>
            <div>
              <div>몸무게</div>
              <Input
                type="text"
                placeholder="입력... "
                value={weight}
                name="weight"
                onChange={handleArrayChange}
              />
            </div>
            <div>
              <div>혈액형</div>
              <Input
                type="text"
                placeholder="입력..."
                value={bloodType}
                name="bloodType"
                onChange={handleChange}
              />
            </div>
          </Daily>
        </DailyContainer>
      </Container>
    </>
  );
}
