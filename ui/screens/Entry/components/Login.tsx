import React from 'react';
import { useFormik } from 'formik';
import { StyleSheet, Text, View } from 'react-native';
import type {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../../../components/Input';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { usersSliceActions } from '../../../../redux/slices/usersSlice';
import Button from '../../../components/Button';

type PropsType = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const Login: React.FC<PropsType> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.usersStore.currentUser);
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const { name, password } = values;
        const userName = name.trim();
        const userPassword = password.trim();
        const user = {
          userName,
          userPassword,
        };
        const jsonValue = JSON.stringify(user);
        await AsyncStorage.setItem('user', jsonValue);
        const value = await AsyncStorage.getItem('user');
        dispatch(usersSliceActions.login(value));
        if (user) {
          navigation.navigate('Details');
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Login</Text>
      <Input
        label="Enter your name"
        errors={formik.touched.name ? formik.errors.name : undefined}
        touched={formik.touched.name || ''}
        onChangeText={formik.handleChange('name')}
        {...formik.getFieldProps('name')}
      />

      <Input
        label="Enter your password"
        errors={formik.touched.password ? formik.errors.password : undefined}
        touched={formik.touched.password || ''}
        onChangeText={formik.handleChange('password')}
        {...formik.getFieldProps('password')}
      />
      <Button onPress={formik.handleSubmit}>
        <Text>Submit</Text>
      </Button>

      <Button onPress={() => navigation.push('Details')}>
        <Text>Submit</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  screenTitle: {
    marginBottom: 20,
    fontSize: 30,
    color: '#000',
  },
});

export default Login;
