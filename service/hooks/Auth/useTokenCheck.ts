import { useEffect } from "react";
import token from "../../libs/Token/token";
import { ACCESS_TOKEN_KEY } from "../../constants/Auth/auth.constants";
import { useRouter } from "next/router";

const useTokenCheck = () => {
  const router = useRouter();
  useEffect(() => {
    const checkTokens = () => {
      if (!token.getToken(ACCESS_TOKEN_KEY)) {
        router.push("/SignInPage");
      }
    };
    checkTokens();
  }, []);
};

export default useTokenCheck;
