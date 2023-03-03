import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from 'src/ui/screens/root/Home';

import Profile from 'src/ui/screens/root/Profile';
import ListPokemons from 'src/ui/screens/root/ListPokemons/ListPokemons';

export type MainTabParamListType = {
  Home: undefined;
  Profile: undefined;
  PokeList: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamListType>();

const MainTab: React.FC = () => {
  return (
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="PokeList" component={ListPokemons} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
};

export default MainTab;
