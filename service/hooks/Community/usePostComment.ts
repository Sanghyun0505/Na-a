import { customAxios } from "@/libs/Axios/customAxios";
import { ChangeEvent, useState } from "react";

export const usePostComment = () => {
  const [content, setContent] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleCommentSubmit = async (
    e: React.MouseEvent<HTMLImageElement>,
    id: string
  ) => {
    e.preventDefault();
    if (content === "") {
      return window.alert("댓글을 작성해주세요!");
    }
    try {
      const data = await customAxios.post(`community/${id}/comment`, {
        content,
      });
      setContent("");
    } catch (e) {
      console.log(e);
    }
  };

  return { content, handleChange, handleCommentSubmit };
};
