import { useState } from "react";
import { useSignInMutation } from "../../queries/Auth/auth.query";
import { useNavigate } from "react-router-dom";
import token from "../../libs/Token/token";
import { ACCESS_TOKEN_KEY } from "../../constants/Auth/auth.constants";

export const useLogin = () => {
  const [credentials, setCredentials] = useState<{
    userid: string;
    password: string;
  }>({
    userid: "",
    password: "",
  });
  const navigate = useNavigate();

  const postSignIn = useSignInMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (credentials.userid === "") {
      return window.alert("아이디를 입력해주세요!");
    }
    if (credentials.password === "") {
      return window.alert("패스워드를 입력해주세요");
    }

    postSignIn.mutateAsync(credentials, {
      onSuccess: (res) => {
        navigate("/");
        token.setToken(ACCESS_TOKEN_KEY, res.body);
        setCredentials({ userid: "", password: "" });
        window.location.replace("/");
      },
      onError: () => {
        window.alert("로그인에 실패하였습니다.");
      },
    });
  };

  return { handleChange, ...credentials, handleSubmit };
};
