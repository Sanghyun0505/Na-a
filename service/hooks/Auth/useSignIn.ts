import { ACCESS_TOKEN_KEY } from "@/constants/Auth/auth.constants";
import token from "@/libs/Token/token";
import { SignInType } from "@/types/Auth/auth.type";
import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export const useSignIn = () => {
  const router = useRouter();
  const [variable, setVariable] = useState<SignInType>({
    userid: "",
    password: "",
  });

  const handleSignInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVariable((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignInSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (variable.userid === "") {
        return window.alert("아이디를 다시 입력해주세요!");
      }
      if (variable.password === "") {
        return window.alert("비밀번호를 다시 입력해주세요!");
      }
      const data = await axios.post("/api/auth/signin", variable);
      token.setToken(ACCESS_TOKEN_KEY, data.data.data.token);
      router.push("/");
      setVariable({ userid: "", password: "" });
    } catch (e) {
      window.alert("로그인을 하지 못했습니다.");
    }
  };

  return {
    handleSignInChange,
    handleSignInSubmit,
    ...variable,
  };
};
