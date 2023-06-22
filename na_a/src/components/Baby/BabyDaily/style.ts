import styled from "styled-components";

export const BabyStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BabyDetail = styled.div`
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #dedede;

  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 20px;
  div {
    margin-top: 3px;
  }
`;

export const BabyProfile = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 20px;
`;

export const BabyDetailDaily = styled.div`
  width: 100%;
  height: calc(100vh - 200px);

  input {
    width: 100%;
    height: 30px;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #dedede;
    padding-left: 10px;
  }
  button {
    width: 100%;
    height: 30px;
    background-color: #ffdf65;
    border: none;
    cursor: pointer;
  }
`;
