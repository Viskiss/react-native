import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

import { ActivityIndicator, View } from 'react-native';

import { useAppDispatch } from 'src/redux/store';
import { useCurrentUser } from 'src/hooks/useCurrentUser';

import LoginStack from './components/LoginStack';
import MainTabScreen from './components/MainTabScreen';

import { styles } from './Navigation.styles';

export type RootStackParamList = {
  Login: undefined;
  Registration: undefined;
};

const Navigation: React.FC = () => {
  const { currentUser, setCurrentUser } = useCurrentUser();

  const [isAuthorized, setIsAuthorized] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const currentUser = await AsyncStorage.getItem('currentUser');
      if (currentUser) {
        const user = JSON.parse(currentUser);

        const email = user.email;
        const password = user.password;

        setCurrentUser(email, password);
        setIsAuthorized(true);
      }
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
    <NavigationContainer>
      {!currentUser ? <LoginStack /> : <MainTabScreen />}
    </NavigationContainer>
  );
};

export default Navigation;
