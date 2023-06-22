import styled from "styled-components";

export const DailyContainer = styled.div`
  width: 100%;
  height: 353px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Daily = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 0 0 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  outline: none;
  border: none;
`;
