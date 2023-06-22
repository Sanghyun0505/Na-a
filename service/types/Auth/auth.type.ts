export interface SignUpType {
  name: string;
  userid: string;
  password: string;
  passwordChk: string;
  type: string | number;
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
