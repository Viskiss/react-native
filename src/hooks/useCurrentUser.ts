import AsyncStorage from '@react-native-async-storage/async-storage';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { userSliceActions } from 'src/redux/slices/userSlice';

export const useCurrentUser = () => {
  const dispatch = useAppDispatch();

  const setCurrentUser = (email: string, password: string) => {
    const user = {
      email,
      password,
    };
    dispatch(userSliceActions.setUser(user));
  };

  const logOutUser = async () => {
    try {
      await AsyncStorage.removeItem('currentUser');
      dispatch(userSliceActions.removeUser(1));
    } catch (e) {
      console.log(e);
    }
  };

  const deleteUserProfile = async () => {
    try {
      await AsyncStorage.removeItem(`${currentUser?.email}`);
      await AsyncStorage.removeItem('currentUser');
      dispatch(userSliceActions.removeUser(1));
    } catch (e) {
      console.log(e);
    }
  };

  const currentUser = useAppSelector((state) => state.userStore.currentUser);

  return {
    setCurrentUser,
    logOutUser,
    deleteUserProfile,
    currentUser,
  };
};
