import GlobalStyle from "@/styles/globalStyle";
import Footer from "../Footer";
import Header from "../Header";

interface Props {
  children: React.ReactNode;
}

export default function PageTempalte({ children }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
