import styled from "styled-components";

export const CommunityRegistHeader = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ededed;
  position: absolute;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 15px;
`;

export const BackArrowContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  gap: 5px;

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  div {
    margin-top: 4px;
  }
`;

export const PostListBtnContainer = styled.div`
  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

export const PostImgLabel = styled.label`
  width: 100%;
  height: 380px;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Img = styled.img<{ isimg: string }>`
  width: ${(props) => (props.isimg !== "" ? "100%" : "109px")};
  height: ${(props) => (props.isimg !== "" ? "380px" : "89px")};
  object-fit: cover;
`;

export const TextTitle = styled.input`
  width: 100%;
  height: 50px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #dedede;
  outline: none;
  padding-left:13px;
`;

export const TextInput = styled.textarea`
  width: 100%;
  height: 244px;
  resize: none;
  border: none;
  outline: none;
  padding: 10px 0 0 10px;
  font-size: 18px;
`;
