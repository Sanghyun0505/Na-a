import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthForm = styled.form<{ auth: string }>`
  width: 85%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: ${(props) => props.auth};
  justify-content: center;
`;

export const Title = styled.div`
  padding-left: 10px;
  margin-bottom: 10px;
  color: #5e5e5e;
`;

export const AuthInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  background-color: #fff4cb;
  border-radius: 15px;
  padding-left: 15px;
`;

export const AuthButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 100px;
  border: none;
  outline: none;
  background-color: #ffdf65;
  margin-top: 15px;
  font-size: 18px;
`;
