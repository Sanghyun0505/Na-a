import { ACCESS_TOKEN_KEY } from "@/constants/Auth/auth.constants";
import token from "@/libs/Token/token";
import { SignUpType } from "@/types/Auth/auth.type";
import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export const useSignUp = () => {
  const router = useRouter();
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

  const handleSignUpSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
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
      
      const data = await axios.post("/api/auth/signup", updatedVariable);
      token.setToken(ACCESS_TOKEN_KEY, data.data.token);
      window.alert("회원가입에 성공하셨습니다.");
      setVariable({
        name: "",
        userid: "",
        password: "",
        passwordChk: "",
        type: "",
      });
      router.push("/SignInPage");
    } catch (e) {
      window.alert("회원가입을 하지 못했습니다.");
      console.log(e);
    }
  };

  return { ...variable, handleSignUpChange, handleSignUpSubmit };
};
