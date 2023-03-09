import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from 'src/ui/screens/root/Home';
import Profile from 'src/ui/screens/root/Profile';
import ListPokemons from 'src/ui/screens/root/ListPokemons';

import MyTabBar from './CustomTabBar/CustomTabBar';

export type MainTabParamList = {
  Home: undefined;
  ListPokemons: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTab: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      initialRouteName="Home"
>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ListPokemons" component={ListPokemons} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainTab;
