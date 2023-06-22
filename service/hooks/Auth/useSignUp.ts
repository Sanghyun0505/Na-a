import { SignUpType } from "@/types/Auth/auth.type";
import { FormEvent, useState } from "react";

export const useSignUp = () => {
  const [variable, setVariable] = useState<SignUpType>({
    name: "",
    userid: "",
    password: "",
    passwordChk: "",
    type: "",
  });

  const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVariable((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUpSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (variable.name === "") {
      return window.alert("이름을 입력해주세요!");
    }
    if (variable.type === "") {
      return window.alert("성별을 입력해주세요!");
    }
    if (variable.userid === "") {
      return window.alert("아이디를 입력해주세요!");
    }
    if (variable.password === "") {
      return window.alert("비밀번호를 입력해주세요!");
    }
    if (variable.passwordChk === "") {
      return window.alert("비밀번호 확인 다시 재입력해주세요!");
    }
    if (variable.password !== variable.passwordChk) {
      return window.alert("비밀번호가 일치하지 않습니다!");
    }

    let { passwordChk, ...updatedVariable } = variable;

    if (variable.type === "남성") {
      updatedVariable = {
        ...updatedVariable,
        type: 0,
      };
    } else {
      updatedVariable = {
        ...updatedVariable,
        type: 1,
      };
    }
  };

  return { ...variable, handleSignUpChange, handleSignUpSubmit };
};
