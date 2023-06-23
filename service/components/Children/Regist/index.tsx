import useHideHeader from "@/hooks/Common/useHideHeader";
import { CommonContainer } from "@/styles/commonStyle";
import * as S from "./style";
import Image from "next/image";
import backArrow from "@/public/backArrow.svg";
import { useRouter } from "next/router";
import uploadImg from "@/public/uploadImg.svg";
import { useChildren } from "@/hooks/Children/useChildren";

export default function ChildrenRegist() {
  const router = useRouter();
  const {
    handleChange,
    handleSubmit,
    handleImgChange,
    height,
    weight,
    birthDate,
    gender,
    bloodType,
    name,
  } = useChildren();
  useHideHeader();
  return (
    <>
      <S.ChildrenRegistHeader>
        <Image src={backArrow} onClick={() => router.back()} alt="arrow" />
        <div style={{ marginTop: "5px" }}>아이 등록</div>
      </S.ChildrenRegistHeader>
      <CommonContainer>
        <S.ChildrenRegistForm onSubmit={handleSubmit}>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            name="profileImage"
            onChange={handleImgChange}
          />
          <S.ChildrenImgContainer htmlFor="file">
            <Image src={uploadImg} alt="uploadImg" />
          </S.ChildrenImgContainer>
          <S.ChildrenRegistWrap>
            <S.CutstomFont>기본정보</S.CutstomFont>
            <S.ChildrenRegistContainer>
              <S.ChildrenRegistInput
                type="text"
                name="name"
                placeholder="이름을 입력해주세요"
                value={name}
                onChange={handleChange}
              />
              <S.ChildrenRegistInput
                type="date"
                name="birthdate"
                placeholder="생일을 선택해주세요"
                value={birthDate}
                onChange={handleChange}
              />
              <S.ChildrenRegistInput
                type="text"
                name="gender"
                placeholder="성별을 입력해주세요 ex) MALE 또는 FEMALE"
                value={gender}
                onChange={handleChange}
              />
              <S.ChildrenRegistInput
                type="text"
                name="height"
                placeholder="키를 입력해주세요"
                value={height}
                onChange={handleChange}
              />
              <S.ChildrenRegistInput
                type="text"
                name="weight"
                value={weight}
                placeholder="몸무게를 입력해주세요"
                onChange={handleChange}
              />
              <S.ChildrenRegistInput
                type="text"
                name="bloodType"
                value={bloodType}
                placeholder="혈액형를 입력해주세요"
                onChange={handleChange}
              />
            </S.ChildrenRegistContainer>

            <S.SubmitBtn type="submit">제출하기</S.SubmitBtn>
          </S.ChildrenRegistWrap>
        </S.ChildrenRegistForm>
      </CommonContainer>
    </>
  );
}
