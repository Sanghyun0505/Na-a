import { useState } from "react";

export const useRegistList = () => {
  const [postImg, setPostImg] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [select, setSelect] = useState<string>("전체");

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostImg(e.target.value);
    console.log(e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    console.log(e.target.value);
  };
  return {
    handleImgChange,
    handleTextChange,
    postImg,
    text,
    select,
    setSelect,
  };
};
