import { customAxios } from "@/libs/Axios/customAxios";
import { useState } from "react";

export const usePostCommunity = () => {
  const [select, setSelect] = useState("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [images, setImages] = useState<string>("");

  const handleImgChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (e.target.files) {
        formData.append("file", e.target.files[0]);
        const data = await customAxios.post("/files", formData);
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    if (select === "") {
      return window.alert("태그를 선택해주세요.");
    }
    if (title === "") {
      window.alert("제목을 입력해주세요.");
    }
    if (content === "") {
      return window.alert("내용을 입력해주세요.");
    }
    if (images === "") {
      return window.alert("이미지를 선택해주세요.");
    }
  };

  return {
    select,
    setSelect,
    handleImgChange,
    handleTitleChange,
    handleContentChange,
    handleSubmit,
    title,
    content,
    images,
  };
};
