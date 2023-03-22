import axios from 'axios';
import { Notifier, NotifierComponents } from 'react-native-notifier';
import type { Tokens } from 'src/types/user';

import tokenHelper from 'src/utils/tokenHelper';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.88.13:4000/api',
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = await tokenHelper.token.getAccess();

    return {
      ...config,
      headers: {
        ...config.headers,
        authorization: `Bearer ${accessToken}`,
      },
    };
  },
);

export const getTokens = async (refreshToken: string) => {
  const response = await axiosInstance.post<Tokens>('/auth/refresh', { token: refreshToken });
  return response.data;
};

axiosInstance.interceptors.response.use(async (response) => {
  return response;
}, async (error) => {
  const originalConfig = error.config;

  if (error.response.status !== 401) {
    Notifier.showNotification({
      title: error.response.data.message,
      Component: NotifierComponents.Alert,
      componentProps: {
        alertType: 'error',
      },
    });
  }

  if (originalConfig.url !== '/auth/refresh' && error.response.status === 401) {
    try {
      const oldRefreshToken = await tokenHelper.token.getRefresh();

      const rs = await getTokens(oldRefreshToken as string);

      const { accessToken, refreshToken } = rs;

      await tokenHelper.token.setAccess(accessToken);
      await tokenHelper.token.setRefresh(refreshToken);

      axios.defaults.headers.common['x-access-token'] = accessToken;

      return axiosInstance(originalConfig);
    } catch (_error) {
      if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
      }

      return Promise.reject(_error);
    }
  }

  throw error;
});

export default axiosInstance;
