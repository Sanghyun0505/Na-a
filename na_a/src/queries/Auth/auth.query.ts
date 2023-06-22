import { useMutation } from "react-query";
import authRepository from "../../repositories/Auth/auth.repository";
import { signInParam, signUpParam } from "../../repositories/Auth/auth.parma";

export const useSignUpMutation = () => {
  return useMutation((signUp: signUpParam) =>
    authRepository.postSignUp(signUp)
  );
};

export const useSignInMutation = () => {
  return useMutation((signIn: signInParam) =>
    authRepository.postSignIn(signIn)
  );
};
