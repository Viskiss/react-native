import React, { lazy } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useAppSelector } from '../../redux/store';

const Login = lazy(() => import('../screens/Entry/components/Login'));

const Home = lazy(() => import('../screens/Home/Home'));
// const ListEntity = lazy(() => import('../screens/ListEntity/ListEntity'));
// const Profile = lazy(() => import('../screens/Profile/Profile'));

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {
  const user = useAppSelector((state) => state.usersStore.currentUser);
  return (
    <NavigationContainer>
      <React.Suspense>
        {!user ? (
          <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        ) : (
          <>
            <Tab.Screen name="Home" component={Home} />
            {/* <Tab.Screen name="List" component={ListEntity} />
              <Tab.Screen name="Profile" component={Profile} /> */}
          </>
        )}
      </React.Suspense>
    </NavigationContainer>
  );
};

export default Navigation;
