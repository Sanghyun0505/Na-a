import styled from "styled-components";

export const DailyImgContainer = styled.div`
  width: 100%;
  height: 380px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const DailyContent = styled.div`
  width: 100%;
  height: calc(100% - 380px);
  padding: 20px;
  overflow-y: scroll;
  font-size: 18px;
  line-height: 25px;
`;
