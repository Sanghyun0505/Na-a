import Image from "next/image";
import styled from "styled-components";

export const ModalWrap = styled.div`
  width: 100%;
  height: 90%;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalItem = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-bottom: 1px solid #dedede;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 15px 0 15px;
  align-items: center;

  color: #5e5e5e;
`;

export const Comment = styled.div`
  width: 100%;
  padding: 10px 15px 0 15px;
`;

export const CommentInputContainer = styled.div`
  width: 100%;
  height: 10%;
  border-top: 1px solid #dedede;
  position: relative;
`;

export const CommentInput = styled.input`
  width: 85%;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 15px;
`;

export const CommentSubmitBtn = styled(Image)`
  position: absolute;
  right: 18px;
  bottom: 16px;
`;
