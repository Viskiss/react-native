import type { User } from 'src/types/user';

import axiosInstance from '../api';

const AUTH_PATH_PREFIX = '/users';

const updateUser = {
  updateUser: (email: string, fullName: string, id: number) => {
    return axiosInstance.patch<User>(`${AUTH_PATH_PREFIX}/${id}`, {
      email,
      fullName,
    });
  },

  updateUserAvatar: (id: number, avatar: string) => {
    return axiosInstance.patch<User>(`${AUTH_PATH_PREFIX}/avatar/${id}`, {
      avatar,
    });
  },

  updatePasswordUser: (password: string, newPassword: string, id: number) => {
    return axiosInstance.patch<User>(`${AUTH_PATH_PREFIX}/password/${id}`, {
      password,
      newPassword,
    });
  },

  deleteProfileUser: (id: number) => {
    return axiosInstance.delete<User>(`${AUTH_PATH_PREFIX}/delete/${id}`);
  },

  getCurrentUser: (id: number) => {
    return axiosInstance.get<User>(`${AUTH_PATH_PREFIX}/${id}`);
  },
};

export default {
  updateUser: updateUser.updateUser,
  updatePasswordUser: updateUser.updatePasswordUser,
  updateUserAvatar: updateUser.updateUserAvatar,
  deleteProfile: updateUser.deleteProfileUser,
  getCurrentUser: updateUser.getCurrentUser,
};
