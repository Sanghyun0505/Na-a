import styled from "styled-components";

export const DetailHeader = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dedede;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  font-size: 20px;
  font-weight: bold;
  gap: 3px;
`;

export const ChildrenInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChildrenInfo = styled.ul`
  width: 90%;
  height: 175px;
  background-color: #ffdf65;
  margin-top: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding-left: 20px;

  li {
    display: flex;
    gap: 5px;
  }
`;

export const ChildrenSubTitle = styled.div`
  font-size: 21px;
  font-weight: bold;
`;

export const ChildrenSubInfo = styled.div`
  font-size: 18px;
  padding-top: 4px;
`;
