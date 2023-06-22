import Image from "next/image";
import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #dedede;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FooterImage = styled(Image)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
