import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChangeUserPassword from 'src/ui/screens/root/Profile/components/ChangePassword';
import SelectPokemon from 'src/ui/screens/root/SelectPokemon';
import MainTab from './MainTab';

export type MainStackParamList = {
  Main: undefined;
  ChangeUserPassword: undefined;
  SelectPokemon: undefined | {url: string};
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainTabScreen: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainTab} />
      <Stack.Screen name="ChangeUserPassword" component={ChangeUserPassword} />
      <Stack.Screen name="SelectPokemon" component={SelectPokemon} />
    </Stack.Navigator>
  );
};

export default MainTabScreen;
