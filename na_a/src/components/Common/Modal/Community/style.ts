import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
export const Modal = styled.div`
  width: 100%;
  height: 75%;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
`;

export const ModalCloseBtnContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 15px;
  border-bottom: 1px solid #dedede;
  font-size: 17px;

  img {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;

export const CommentListWrap = styled.div`
  width: 100%;
  height: calc(100% - 100px);

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalCommentList = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dedede;
  justify-content: center;
  padding-left: 20px;
`;

export const CommentUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: #757575;
  font-size: 15px;
  margin-bottom: 10px;

  img {
    padding-right: 20px;
    cursor: pointer;
  }
`;

export const CommentContainer = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid #d9d9d9;

  display: flex;
`;

export const CommentInput = styled.input`
  width: 85%;
  height: 50px;
  outline: none;
  border: none;
  padding-left: 10px;
`;

export const CommentSubmitContainer = styled.div`
  width: 15%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #dedede;

  img {
    cursor: pointer;
  }
`;
