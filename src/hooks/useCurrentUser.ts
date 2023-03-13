import AsyncStorage from '@react-native-async-storage/async-storage';
import type { ImagePickerResponse } from 'react-native-image-picker';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { userSliceActions } from 'src/redux/slices/userSlice';

import type { Asset } from 'src/types/user';

export const useCurrentUser = () => {
  const dispatch = useAppDispatch();

  const setCurrentUser = async () => {
    const currentUser = await AsyncStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);

      dispatch(
        userSliceActions.setUser({
          email: user.email,
          password: user.password,
          avatar: user.avatar,
        }),
      );
    }
  };

  const logOutUser = async () => {
    try {
      await AsyncStorage.removeItem('currentUser');
      dispatch(userSliceActions.removeUser(1));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserProfile = async () => {
    try {
      await AsyncStorage.removeItem(`${currentUser?.email}`);
      await AsyncStorage.removeItem('currentUser');
      dispatch(userSliceActions.removeUser(1));
    } catch (error) {
      console.log(error);
    }
  };

  const addUserAvatar = async (avatar: ImagePickerResponse) => {
    try {
      const uri = avatar.assets as Asset;

      const user = {
        email: currentUser?.email,
        password: currentUser?.password,
        avatar: uri[0].uri,
      };

      await AsyncStorage.mergeItem(
        `${currentUser?.email}`,
        JSON.stringify(user),
      );

      await AsyncStorage.mergeItem(
        'currentUser',
        JSON.stringify(user),
      );

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
    logOutUser,
    deleteUserProfile,
    addUserAvatar,
    changeTheme,
    setCurrentTheme,
    currentUser,
    theme,
  };
};
