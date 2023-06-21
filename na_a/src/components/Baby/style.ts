import styled from "styled-components";

export const BabyListWrap = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BabyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 10px 0 10px 0;
`;

export const BabyListItem = styled.div`
  width: 90%;
  height: 80px;
  border-radius: 10px;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.3);

  display: flex;
`;

export const BabyAble = styled.div`
  width: 5%;
  height: 80px;
  background-color: #ffdf65;
  border-radius: 10px 0 0 10px;
`;

export const BabyList = styled.div`
  width: 95%;
  height: 80px;

  display: flex;
  gap: 10px;
  align-items: center;
  padding-left: 20px;

  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const BabySubTitle = styled.div`
  font-size: 13px;
  color: #5e5e5e;
  margin-top: 10px;
`;
