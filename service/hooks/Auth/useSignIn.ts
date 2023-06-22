import { SignInType } from "@/types/Auth/auth.type";
import { FormEvent, useState } from "react";

export const useSignIn = () => {
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

  const handleSignInSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (variable.userid === "") {
      return window.alert("아이디를 다시 입력해주세요!");
    }
    if (variable.password === "") {
      return window.alert("비밀번호를 다시 입력해주세요!");
    }
    console.log(variable);
  };

  return {
    handleSignInChange,
    handleSignInSubmit,
    ...variable,
  };
};
