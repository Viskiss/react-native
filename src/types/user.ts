export type User = {
  id: number;
  email: string;
  password: string;
  fullName?: string;
  avatar?: string;
};

export type UserWithTokens = {
  user: User;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type Asset = [
  {
    fileName: string;
    fileSize: number;
    height: number;
    type: string;
    uri: string;
  },
];
