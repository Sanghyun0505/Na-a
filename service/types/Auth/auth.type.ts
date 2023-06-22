export interface SignUpType {
  username: string;
  userid: string;
  password: string;
  passwordChk: string;
  type: string;
}

export interface SignInType {
  userid: string;
  password: string;
}

export interface SignUpResponse {
  success: boolean;
  token: {
    token: string;
  };
}
