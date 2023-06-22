import { useState } from "react";
import {
  usePostBabyMutation,
  usePostBabyImgMutation,
} from "../../queries/Baby/baby.query";
import { useNavigate } from "react-router-dom";

export const useBabyDaily = () => {
  const [credentials, setCredentials] = useState<{
    name: string;
    bloodType: string;
  }>({
    name: "",
    bloodType: "",
  });

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState<string | Date>("2023-06-22T07:43:30.290Z");
  const [img, setImg] = useState("");
  const postFileImg = usePostBabyImgMutation();
  const postBaby = usePostBabyMutation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "height") {
      setHeight(e.target.value);
    } else if (e.target.name === "birthdate") {
      setBirth(e.target.value);
    } else if (e.target.name === "weight") {
      setWeight(e.target.value);
    } else {
      setGender(e.target.value);
    }
  };

  const handleImgChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const formData = new FormData();
    if (e.target.files) {
      formData.append("file", e.target.files[0]);
      postFileImg.mutateAsync(formData, {
        onSuccess: (res) => {
          setImg(res.body);
        },
      });
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    if (birth === "") {
      window.alert("생일을 제대로 제대로 입력해주세요.");
      return;
    }
    if (credentials.bloodType === "") {
      window.alert("혈액형을 제대로 입력해주세요.");
      return;
    }
    if (height === "") {
      window.alert("키를 제대로 입력해주세요.");
      return;
    }
    if (weight === "") {
      window.alert("몸무게를 제대로 입력해주세요.");
      return;
    }
    if (gender === "") {
      window.alert("성별을 제대로 입력해주세요.");
      return;
    }
    const update = Object.assign(credentials, {
      profileImage: img,
      birthdate: birth,
      gender: gender === "MALE" ? 0 : 1,
      height: parseFloat(height),
      weight: parseFloat(weight),
    });
    console.log(update);
    postBaby.mutateAsync(update, {
      onSuccess: () => {
        window.alert("작성하였습니다!");
        navigate("/babycare");
      },
    });
  };

  return {
    ...credentials,
    gender,
    img,
    birth,
    weight,
    height,
    handleChange,
    handleArrayChange,
    handleImgChange,
    handleSubmit,
  };
};
