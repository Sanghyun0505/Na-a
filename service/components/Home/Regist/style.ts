import Image from "next/image";
import styled from "styled-components";

export const CategoryHeader = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid #dedede;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  div {
    display: flex;
    align-items: center;
  }
`;

export const RegistCategory = styled.div`
  width: 100%;
  height: 60px;
  border-top: 1px solid #dedede;

  display: flex;
  align-items: center;
  gap: 15px;
  padding-left: 15px;
`;

export const Category = styled.div<{ isselect: string }>`
  width: 60px;
  height: 25px;
  border-radius: 50px;
  background-color: ${(props) =>
    props.isselect === "true" ? "#FFDF65" : "#d9d9d9"};
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled(Image)`
  width: 24px;
  height: 24px;
`;

export const Title = styled.div`
  font-size: 18px;
  margin: 5px 0 0 5px;
`;

export const RegistImgContainer = styled.label`
  width: 100%;
  height: 380px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SelectImgUpload = styled(Image)`
  width: 109px;
  height: 89px;
`;

export const RegistTitleInput = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border: none;
  padding-left: 15px;
  border-bottom: 1px solid #dedede;
`;

export const RegistTextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: calc(100vh - 600px);
  outline: none;
  border: none;
  padding: 15px 0 0 15px;
`;
