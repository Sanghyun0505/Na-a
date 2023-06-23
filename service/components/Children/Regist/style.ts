import styled from "styled-components";

export const ChildrenRegistHeader = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dedede;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const ChildrenRegistForm = styled.form`
  width: 100%;
  height: 100%;
`;

export const ChildrenImgContainer = styled.label`
  width: 100%;
  height: 380px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ChildrenRegistWrap = styled.div`
  width: 100%;
  height: calc(100% - 395px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  margin-top: 15px;
`;

export const ChildrenRegistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
`;

export const CutstomFont = styled.div`
  color: #ffdf65;
  font-weight: bold;
  margin-left: 25px;
`;

export const ChildrenRegistInput = styled.input`
  width: 90%;
  height: 40px;
  border-radius: 10px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  border: 1px solid #ffdf65;
  outline: none;
  padding: 0 12px 0 12px;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: #ffdf65;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  outline:none;
  border: none;
`;
