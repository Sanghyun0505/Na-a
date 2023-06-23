import { customAxios } from "@/libs/Axios/customAxios";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

export const useChildren = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();

  const handleImgChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (e.target.files) {
        formData.append("file", e.target.files[0]);
        const { data } = await customAxios.post("files", formData);
        // setImage(data.data);
        console.log(data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "bloodType") {
      setBloodType(e.target.value);
    } else if (e.target.name === "height") {
      setHeight(e.target.value);
    } else if (e.target.name === "weight") {
      setWeight(e.target.value);
    } else if (e.target.name === "birthdate") {
      setBirthDate(e.target.value);
    } else if (e.target.name === "gender") {
      setGender(e.target.value);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (birthDate === "") {
        window.alert("생일을 제대로 제대로 입력해주세요.");
        return;
      }
      if (bloodType === "") {
        window.alert("혈액형을 제대로 입력해주세요.");
        return;
      }
      if (gender === "") {
        window.alert("성별을 제대로 입력해주세요.");
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

      const update = {
        name: name,
        profileImage: image,
        bloodType: bloodType,
        birthdate: birthDate,
        gender: gender,
        height: parseFloat(height),
        weight: parseFloat(weight),
      };
      const data = await customAxios.post("/child", update);
      window.alert("아이를 등록하였습니다!");
      console.log(data);
      setImage("");
      setName("");
      setBloodType("");
      setBirthDate("");
      setGender("");
      setHeight("");
      setWeight("");
      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  return {
    handleChange,
    handleSubmit,
    handleImgChange,
    height,
    weight,
    birthDate,
    gender,
    bloodType,
    name,
  };
};
