import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Text, View } from 'react-native';

import { useAppDispatch } from 'src/redux/store';
import Button from 'src/ui/components/Button/Button';
import { userSliceActions } from 'src/redux/slices/userSlice';

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();

  const hendleLogOutUser = async () => {
    try {
      await AsyncStorage.removeItem('currentUser');
      dispatch(userSliceActions.removeUser(1));
    } catch (e) {
      console.log('Unable exit');
    }
  };
  return (
    <View>
      <Text>Profile</Text>
      <Button onPress={hendleLogOutUser}>LogOut</Button>
    </View>
  );
};

export default Profile;
