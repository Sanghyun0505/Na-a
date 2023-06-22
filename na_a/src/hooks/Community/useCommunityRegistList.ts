import { useState } from "react";
import { usePostBabyImgMutation } from "../../queries/Baby/baby.query";
import { usePostCommunityMutation } from "../../queries/Community/community.query";
import { useNavigate } from "react-router-dom";

export const useCommunityRegistList = () => {
  const [postImg, setPostImg] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [select, setSelect] = useState<string>("FREE");
  const [title, setTitle] = useState<string>("");
  const postFileImg = usePostBabyImgMutation();
  const postCommunityList = usePostCommunityMutation();
  const navigate = useNavigate();

  const handleImgChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const formData = new FormData();
    if (e.target.files) {
      formData.append("file", e.target.files[0]);
      postFileImg.mutateAsync(formData, {
        onSuccess: (res) => {
          setPostImg(res.body);
        },
      });
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    if (text === "") {
      return window.alert("내용을 작성해주세요!");
    }
    if (postImg === "") {
      return window.alert("사진을 추가해주세요!");
    }
    const arr = {
      category: select,
      title: title,
      content: text,
      images: postImg,
    };
    postCommunityList.mutateAsync(arr, {
      onSuccess: () => {
        window.alert("글을 등록하였습니다.");
        navigate("/");
      },
    });
  };

  return {
    handleImgChange,
    handleTextChange,
    handleSubmit,
    postImg,
    text,
    select,
    setSelect,
    handleChange,
    title,
  };
};
