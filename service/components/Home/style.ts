import Image from "next/image";
import styled from "styled-components";

export const HomeWrap = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const HomeCotainer = styled.div`
  width: 100%;
  height: 495px;
  border-top: 1px solid #dedede;
`;

export const ListProfileContainer = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 10px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    width: 26px;
    height: 26px;
    border-radius: 10px;
    background-color: #d9d9d9;
  }
  div {
    margin-top: 3px;
  }
`;

export const Category = styled.div`
  width: 60px;
  height: 24px;
  background-color: #d9d9d9;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-top: 3px;
`;

export const ListImgContainer = styled.div`
  width: 100%;
  height: 380px;
`;

export const ListImg = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const ListContentContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
`;

export const Text = styled.div`
  width: 80%;
  height: 66px;

  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;

  div {
    word-wrap: break-word;
  }
`;

export const ChatWrap = styled.div`
  width: 20%;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatImg = styled(Image)`
  width: 25px;
  height: 25px;
`;
