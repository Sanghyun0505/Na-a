import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import token from "../../libs/Token/token";
import { ACCESS_TOKEN_KEY } from "../../constants/Auth/auth.constants";

const useTokenCheck = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkTokens = () => {
      if (!token.getToken(ACCESS_TOKEN_KEY)) {
        navigate("/login");
      }
    };
    checkTokens();
  }, [navigate]);
};

export default useTokenCheck;
