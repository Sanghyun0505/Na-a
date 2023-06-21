import styled from "styled-components";

export const HomeItemCotainer = styled.div`
  width: 100%;
  height: 496px;
  border-top: 1px solid #dedede;

  display: flex;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 380px;
  background-color: black;

  img {
    width: 100%;
    height: 380px;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 66px;

  display: flex;
`;

export const ProfileImg = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 10px;
  object-fit: cover;
  background-color: #d9d9d9;
`;

export const Text = styled.div`
  width: 80%;
  height: 66px;

  padding: 10px;
  overflow-x: auto;

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

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
