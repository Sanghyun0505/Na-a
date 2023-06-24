import styled from "styled-components";

export const DetailHeader = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dedede;
  display: flex;
  align-items: center;
  padding-left: 13px;
`;

export const DetailImgContainer = styled.div`
  width: 100%;
  height: 380px;
  background-color: gray;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const DetailInfoContainer = styled.div`
  width: 100%;
  height: calc(100% - 380px);
`;

export const FestivalTitle = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dedede;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
`;

export const FestivalMore = styled.div`
  cursor: pointer;
  width: auto;
  height: 30px;
  background-color: #ffdf65;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 0 20px 0 20px;
`;

export const FestivalInfoContainer = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  padding: 20px 0 0 20px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 25px;
    li {
      display: flex;
      gap: 7px;
    }
  }
`;

export const SubTitle = styled.div<{ istitle?: string }>`
  font-size: 18px;
  font-weight: 500px;
  font-weight: ${(props) => props.istitle === "true" && "700"};
`;

export const SubInfo = styled.div`
  color: #5e5e5e;
  font-size: 13px;
  padding-top: 3px;
`;
