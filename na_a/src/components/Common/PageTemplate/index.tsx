import { ReactNode } from "react";
import GlobalStyle from "../../../styles/globalStyle";

interface Props {
  children: ReactNode;
}

export default function PageTemplate({ children }: Props) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
