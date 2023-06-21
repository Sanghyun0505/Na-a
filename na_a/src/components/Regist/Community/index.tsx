import * as S from "./style";
import useHideHeader from "../../../hooks/Common/useHideHeader";
import { Container } from "../../style";
import backArrow from "../../../assets/backArrow.svg";
import postListBtn from "../../../assets/postListBtn.svg";
import imgUpload from "../../../assets/imgUpload.svg";
import { useNavigate } from "react-router-dom";
import { Category, CategoryContainer } from "../../Home/style";
import { COMMUNITAY_ITEMS } from "../../../constants/Home";
import { useRegistList } from "../../../hooks/Regist/useRegistList";

export default function CommunityRegist() {
  const { handleImgChange, handleTextChange, text, setSelect, select } =
    useRegistList();
  const navigate = useNavigate();
  useHideHeader();

  return (
    <>
      <S.CommunityRegistHeader>
        <S.BackArrowContainer>
          <img src={backArrow} alt="" onClick={() => navigate(-1)} />
          <div>새 게시글</div>
        </S.BackArrowContainer>
        <S.PostListBtnContainer>
          <img src={postListBtn} alt="" />
        </S.PostListBtnContainer>
      </S.CommunityRegistHeader>
      <Container>
        <CategoryContainer>
          {COMMUNITAY_ITEMS.map((item) => (
            <Category
              key={item.id}
              isselect={select === item.name ? "true" : "false"}
              onClick={() => setSelect(item.name)}
            >
              {item.name}
            </Category>
          ))}
        </CategoryContainer>
        <input
          id="file"
          type="file"
          style={{ display: "none" }}
          onChange={handleImgChange}
        />
        <S.PostImgLabel htmlFor="file">
          <img src={imgUpload} alt="" />
        </S.PostImgLabel>

        <S.TextInput
          placeholder="내용을 입력해주세요..."
          value={text}
          onChange={handleTextChange}
        />
      </Container>
    </>
  );
}
