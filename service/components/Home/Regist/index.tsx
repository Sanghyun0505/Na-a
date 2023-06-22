import { CommonContainer } from "@/styles/commonStyle";
import * as S from "./style";
import useHideHeader from "@/hooks/Common/useHideHeader";
import backArrow from "@/public/backArrow.svg";
import check from "@/public/check.svg";
import { COMMUNITAY_ITEMS } from "@/constants/Home/home.constant";
import uploadImg from "@/public/uploadImg.svg";
import { usePostCommunity } from "@/hooks/Community/usePostCommunity";
import { useRouter } from "next/router";

export default function CommunityRegist() {
  const {
    select,
    setSelect,
    handleImgChange,
    handleTitleChange,
    handleContentChange,
    handleSubmit,
    title,
    content,
    images,
  } = usePostCommunity();
  const router = useRouter();
  useHideHeader();
  return (
    <>
      <S.CategoryHeader>
        <div>
          <S.Img src={backArrow} onClick={() => router.back()} alt="post" />
          <S.Title>새 게시글</S.Title>
        </div>
        <div>
          <S.Img src={check} onClick={handleSubmit} alt="check" />
        </div>
      </S.CategoryHeader>{" "}
      <CommonContainer>
        <S.RegistCategory>
          {COMMUNITAY_ITEMS.map((item) => (
            <S.Category
              key={item.id}
              onClick={() => setSelect(item.name)}
              isselect={select === item.name ? "true" : "false"}
            >
              {item.name}
            </S.Category>
          ))}
        </S.RegistCategory>
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={handleImgChange}
        />
        <S.RegistImgContainer htmlFor="file">
          <S.SelectImgUpload src={uploadImg} alt="upload" />
        </S.RegistImgContainer>
        <S.RegistTitleInput
          placeholder="제목 쓰기..."
          type="text"
          onChange={handleTitleChange}
          value={title}
        />
        <S.RegistTextArea
          placeholder="게시글 쓰기..."
          onChange={handleContentChange}
          value={content}
        />
      </CommonContainer>
    </>
  );
}
