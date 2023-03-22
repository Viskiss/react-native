import AsyncStorage from '@react-native-async-storage/async-storage';
import type { ImagePickerResponse } from 'react-native-image-picker';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { userSliceActions } from 'src/redux/slices/userSlice';
import updateUser from 'src/api/requests/updateUserApi';

import type { Asset, User, UserWithTokens } from 'src/types/user';

export const useCurrentUser = () => {
  const dispatch = useAppDispatch();

  const setCurrentUserWithTokens = async (data: UserWithTokens) => {
    if (data.tokens) {
      await AsyncStorage.setItem('accessToken', data.tokens.accessToken);
      await AsyncStorage.setItem('refreshToken', data.tokens.refreshToken);
    }

    dispatch(
      userSliceActions.setUser(data.user),
    );
  };

  const setCurrentUser = async (user: User) => {
    dispatch(
      userSliceActions.setUser(user),
    );
  };

  const logOutUser = async () => {
    try {
      dispatch(userSliceActions.removeUser(1));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserProfile = async () => {
    try {
      await updateUser.deleteProfile(currentUser?.id || 0).then(() => {
        dispatch(userSliceActions.removeUser(1));
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addUserAvatar = async (avatar: ImagePickerResponse) => {
    try {
      const uri = avatar.assets as Asset;

      const avatarUser = uri[0].uri;

      await updateUser.updateUserAvatar(currentUser?.id || 0, avatarUser);

      dispatch(userSliceActions.addUserAvatar(uri[0].uri));
    } catch (error) {
      console.log(error);
    }
  };

  const changeTheme = async () => {
    try {
      if (theme === 'light') {
        await AsyncStorage.setItem('theme', 'dark');
        dispatch(userSliceActions.changeTheme('dark'));
      } else {
        await AsyncStorage.setItem('theme', 'light');
        dispatch(userSliceActions.changeTheme('light'));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setCurrentTheme = async () => {
    try {
      const theme = await AsyncStorage.getItem('theme');
      dispatch(userSliceActions.changeTheme(theme));
    } catch (error) {
      console.log(error);
    }
  };

  const currentUser = useAppSelector((state) => state.userStore.currentUser);
  const theme = useAppSelector((state) => state.userStore.theme);

  return {
    setCurrentUser,
    setCurrentUserWithTokens,
    logOutUser,
    deleteUserProfile,
    addUserAvatar,
    changeTheme,
    setCurrentTheme,
    currentUser,
    theme,
  };
};
