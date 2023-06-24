import styled from "styled-components";
import { Map } from "react-kakao-maps-sdk";
import Image from "next/image";

export const SearchContainer = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dedede;
`;

export const SearchBox = styled.div`
  width: 85%;
  height: 40px;
  border-radius: 50px;
  border: 3px solid #ffdf65;
  display: flex;
  align-items: center;
  input {
    width: 90%;
    height: 100%;
    outline: none;
    border: none;
    border-radius: 50px 0 0 50px;
    padding-left: 10px;
  }
`;

export const SearchIcon = styled(Image)`
  width: 15px;
  height: 15px;
`;

export const KakaoMap = styled(Map)`
  width: 100%;
  height: calc(100% - 80px);
`;
