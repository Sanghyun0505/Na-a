import styled from "styled-components";

export const UserContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  margin-top: 50px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    background-color: #ffdf65;
    border-radius: 4rem;
  }
`;

export const UserAbleContainer = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const UserInfoContainer = styled.ul`
  width: 100%;
  height: 116px;
  background-color: #d9d9d9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;

  li {
    display: flex;
    gap: 10px;
  }
`;

export const InfoTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const Info = styled.div`
  font-size: 13px;
  margin-top: 3px;
`;

export const UserEditAndLogout = styled.div<{ isedit?: string }>`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => (props.isedit ? "#ffdf65" : "#000000")};
  color: ${(props) => (props.isedit ? "#000000" : "#ffffff")};
  border-radius: 10px;
`;
