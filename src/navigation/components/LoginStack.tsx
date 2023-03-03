import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from 'src/ui/screens/auth/Login/Login';
import Registration from 'src/ui/screens/auth/Registration/Registration';

export type LoginStackParamListType = {
  Login: undefined;
  Registration: undefined;
};

const Stack = createNativeStackNavigator<LoginStackParamListType>();

const LoginStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
};

export default LoginStack;
