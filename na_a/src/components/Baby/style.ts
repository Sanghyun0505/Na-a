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
  gap: 15px;
  margin-top: 10px;
`;

export const BabyListItem = styled.div`
  width: 90%;
  height: 80px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius:15px;
`;

export const Baby

export const BabyImgContainer = styled.div`
  width: 100%;
  height: 100px;
  img {
    width: 100%;
    height: 80px;
  }
`;

export const BabyInfoContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;

export const Name = styled.div`
  font-size: 24px;
`;
