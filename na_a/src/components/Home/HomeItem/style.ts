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
  justify-content: space-between;
  gap: 10px;
  padding: 0 10px 0 10px;
`;

export const ChoisedCategory = styled.div`
  width: 60px;
  height: 25px;
  border-radius: 30px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  padding-top: 3px;
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

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
