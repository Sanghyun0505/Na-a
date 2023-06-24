import styled from "styled-components";

export const ImgLabel = styled.label`
  width: 100%;
  height: 380px;
  background-color: #ffdf65;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DailyDate = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #dedede;
  padding: 0 20px 0 20px;
`;

export const DailyTextArea = styled.textarea`
  width: 100%;
  height: calc(100% - 430px);
  resize: none;
  outline: none;
  border: none;
  font-size: 16px;
  padding: 20px 0 0 20px;
`;
