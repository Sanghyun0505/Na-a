import token from "@/libs/Token/token";
import { useRouter } from "next/router";

export const useLogout = () => {
  const router = useRouter();
  const handleLogout = () => {
    const answer = window.confirm("로그아웃 하시겠습니까?");
    if (answer) {
      token.clearToken();
      router.push("/signin");
    }
  };
  return { handleLogout };
};
