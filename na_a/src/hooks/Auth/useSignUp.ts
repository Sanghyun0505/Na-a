import { useState } from "react";
import { useSignUpMutation } from "../../queries/Auth/auth.query";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const [credentials, setCredentials] = useState<{
    userid: string;
    password: string;
    username: string;
    type: number;
  }>({
    userid: "",
    password: "",
    username: "",
    type: 2,
  });
  const [type, setType] = useState<string>("");
  const postSignUp = useSignUpMutation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (credentials.username === "")
      return window.alert("이름을 입력해주세요!");
    if (credentials.userid === "")
      return window.alert("아이디를 입력해주세요!");
    if (credentials.password === "")
      return window.alert("비밀번호를 입력해주세요!");
    if (type === "" || (type !== "male" && type !== "female"))
      return window.alert("성별을 입력해주세요!");

    let updatedCredentials;
    if (type === "male") {
      updatedCredentials = {
        ...credentials,
        type: 0,
      };
    } else {
      updatedCredentials = {
        ...credentials,
        type: 1,
      };
    }
    postSignUp.mutateAsync(updatedCredentials, {
      onSuccess: () => {
        window.alert("회원가입에 성공하였습니다.");
        navigate("/login");
        setCredentials({ userid: "", password: "", username: "", type: 2 });
      },
      onError: () => {
        window.alert("회원가입에 실패하였습니다.");
      },
    });
  };

  return {
    handleChange,
    ...credentials,
    handleSubmit,
    type,
    setType,
  };
};
