import styled from "styled-components";

export const DetailWrap = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DetailItem = styled.div`
  width: 100%;
  height: 733px;
  border-bottom: 1px solid #d9d9d9;
`;

export const DetailImgContainer = styled.div`
  width: 100%;
  height: 380px;
  background-color: gray;

  img {
    width: 100%;
    height: 380px;
  }
`;

export const DetailDailyContainer = styled.div`
  width: 100%;
  height: 353px;
`;
