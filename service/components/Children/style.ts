import Image from "next/image";
import styled from "styled-components";

export const ChildrenWrap = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
`;

export const ChildrenListItem = styled.div`
  width: 90%;
  height: 80px;
  border-radius: 10px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  background-color: #ffffff;
`;

export const Thin = styled.div`
  width: 3%;
  height: 80px;
  background-color: #ffdf65;
  border-radius: 10px 0 0 10px;
`;

export const Info = styled.div`
  width: 97%;
  height: 80px;

  display: flex;
  align-items: center;
  gap: 7px;
  padding-left: 15px;
`;

export const ChildrenImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  object-fit: cover;
`;

export const ChildrenTitle = styled.div`
  font-size: 17px;
  margin-bottom: 5px;
`;

export const ChildrenSubTitle = styled.div`
  font-size: 10px;
  color: #5e5e5e;
`;
