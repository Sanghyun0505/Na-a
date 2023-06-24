import styled from "styled-components";

export const FestivalItemBox = styled.div`
  width: 90%;
  height: 80px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  display: flex;
  cursor: pointer;
  background-color: #ffffff;
`;

export const FesitvalThin = styled.div`
  width: 3%;
  border-radius: 10px 0 0 10px;
  background-color: #ffdf65;
  height: 100%;
`;

export const FestivalInfo = styled.div`
  width: 97%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const FestivalImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  object-fit: cover;
`;

export const FestivalTitleAndPeriod = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding-left: 10px;
`;

export const FesitvalTitle = styled.div``;

export const FesitvalPeriod = styled.div`
  color: #5e5e5e;
  font-size: 12px;
`;
