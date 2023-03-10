export type User = {
  email: string;
  password: string;
  avatar: string;
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
