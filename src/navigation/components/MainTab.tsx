import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../ui/screens/Home/Home';
import ListEntity from '../../ui/screens/ListEntity/ListEntity';
import Profile from '../../ui/screens/Profile/Profile';

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
        <Tab.Screen name="PokeList" component={ListEntity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
};

export default MainTab;
