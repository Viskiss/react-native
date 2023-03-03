import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { userSliceActions } from 'src/redux/slices/userSlice';

import { ActivityIndicator, View } from 'react-native';

import { useAppDispatch, useAppSelector } from 'src/redux/store';

import LoginStack from './components/LoginStack';
import MainTab from './components/MainTab';

import { styles } from './Navigation.styles';

export type RootStackParamListType = {
  Login: undefined;
  Registration: undefined;
};

const Navigation: React.FC = () => {
  const user = useAppSelector((state) => state.userStore.currentUser);

  const [isAuthorized, setIsAuthorized] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const currentUser = await AsyncStorage.getItem('user');
      dispatch(userSliceActions.setUser(currentUser));
      setIsAuthorized(true);
    })();
  }, [dispatch, setIsAuthorized]);

  if (!isAuthorized) {
    return (
      <View style={styles.container}>
        {!isAuthorized && <ActivityIndicator color="#fff" />}
      </View>
    );
  }

  return (
    <View style={styles.container}>{!user ? <LoginStack /> : <MainTab />}</View>
  );
};

export default Navigation;
