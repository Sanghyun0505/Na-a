import axios from "axios";
import { signInParam, signUpParam } from "./auth.parma";
import CONFIG from "../../config/config.json";
import { AccessKeyRespone } from "../../types/Auth/auth.type";

class AuthRepository {
  public async postSignUp(signUp: signUpParam): Promise<void> {
    await axios.post(`${CONFIG.SERVER}/auth/signup`, signUp);
  }

  public async postSignIn(signIn: signInParam): Promise<AccessKeyRespone> {
    const { data } = await axios.post(`${CONFIG.SERVER}/auth/signin`, signIn);
    return data;
  }
}

export default new AuthRepository();
