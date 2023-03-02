import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { usersSliceActions } from '../redux/slices/usersSlice';

import { useAppDispatch, useAppSelector } from '../redux/store';

import LoginStack from './components/LoginStack';
import MainTab from './components/MainTab';

export type RootStackParamListType = {
  Login: undefined;
  Registration: undefined;
};

const Navigation: React.FC = () => {
  const user = useAppSelector((state) => state.usersStore.currentUser);

  const [isAuthorized, setIsAuthorized] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const currentUser = await AsyncStorage.getItem('user');
      dispatch(usersSliceActions.login(currentUser));
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
  // eslint-disable-next-line no-console
  console.log(user);
  return (
    <View style={styles.container}>{!user ? <LoginStack /> : <MainTab />}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});

export default Navigation;
