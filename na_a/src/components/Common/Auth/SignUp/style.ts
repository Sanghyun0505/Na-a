import styled from "styled-components";

export const SignUpCenter = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
  background-color: gray;
  text-align: center;
`;

export const SignUpImgDiv = styled.div`
  width: 100px;
  height: 100px;
  background: #d9d9d9;
  border-radius: 50px;
  margin-top: 22px;
  margin-bottom: 40px;

  input {
    display: none;
  }

  label {
    width: 100px;
    height: 100px;
    border-radius: 4rem;
    background-color: #d9d9d9;
    display: flex;
    justify-content: center;
    img {
      width: 50px;
      height: 50px;
      margin-top: 25px;
    }
  }
`;

export const SignUpP = styled.p`
  font-size: 15px;
  color: #5e5e5e;
  margin-left: 10px;
  margin-bottom: 3px;
`;

export const SignUpInputBox = styled.input`
  outline: none;
  width: 280px;
  height: 50px;
  border: none;
  border-radius: 15px;
  background-color: #fff4cb;
  padding-inline-start: 20px;
  padding-inline-end: 20px;
  margin-bottom: 50px;
`;

export const SignUpButton = styled.button`
  width: 280px;
  height: 50px;
  border: none;
  border-radius: 50px;
  background-color: #ffdf65;
  font-size: 20px;
  color: #000;
`;

export const SignUpSpan = styled.span`
  font-size: 10px;
  color: #5e5e5e;
  margin-left: 60px;
`;

export const SignUpDiv = styled.div`
  font-size: 8px;
  color: #000;
  text-decoration: underline;
  margin-left: 5px;
  display: inline-block;
`;
