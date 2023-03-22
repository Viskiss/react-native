import type { Tokens, User, UserWithTokens } from 'src/types/user';

import axiosInstance from '../api';

export type AuthUserType = {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  user: User;
};

export const AUTH_PATH_PREFIX = '/auth';

const authUser = {
  loginUser: (email: string, password: string) => {
    return axiosInstance.post<UserWithTokens>(`${AUTH_PATH_PREFIX}/login`, {
      email,
      password,
    });
  },

  registrationUser: (email: string, password: string) => {
    return axiosInstance.post<UserWithTokens>(`${AUTH_PATH_PREFIX}/sign-up`, {
      email,
      password,
    });
  },

  getNewTokens: (refreshToken: string) => {
    return axiosInstance.post<Tokens>(`${AUTH_PATH_PREFIX}/refresh`, {
      refreshToken,
    });
  },
};

export default {
  login: authUser.loginUser,
  registration: authUser.registrationUser,
  getNewTokens: authUser.getNewTokens,
};
