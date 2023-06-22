import styled from "styled-components";

export const CategoryContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 12px;
`;

export const Category = styled.div<{ isselect: string }>`
  width: 60px;
  height: 25px;
  border-radius: 30px;
  background-color: ${(props) =>
    props.isselect === "true" ? "#FFDF65" : "#d9d9d9"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListWrap = styled.div`
  width: 100%;
  height: calc(100vh - 65px);

  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap-reverse;
  ::-webkit-scrollbar {
    display: none;
  }
  position: relative;
`;
