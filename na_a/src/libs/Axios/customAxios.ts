import axios from "axios";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Auth/auth.constants";
import token from "../Token/token";
import CONFIG from "../../config/config.json";

export const customAxios = axios.create({
  baseURL: `${CONFIG.SERVER}`,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});
