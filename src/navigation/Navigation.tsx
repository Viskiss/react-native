import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ActivityIndicator, View } from 'react-native';

import { useCurrentUser } from 'src/hooks/useCurrentUser';

import { defoultColors } from 'src/constants/colors';
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

  useEffect(() => {
    (async () => {
      await setCurrentUser();
      setIsAuthorized(true);
    })();
  }, [setIsAuthorized]);

  if (!isAuthorized) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={defoultColors.background.auth} />
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
