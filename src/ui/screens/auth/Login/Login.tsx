import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import {
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { userSliceActions } from 'src/redux/slices/userSlice';

import { fieldsValidation } from 'src/utils/validationFields';
import type { RootStackParamListType } from 'src/navigation';

import Input from 'src/ui/components/Input';
import Button from 'src/ui/components/Button';

import { styles } from './Login.styles';

type PropsType = NativeStackScreenProps<RootStackParamListType, 'Login'>;

type ProfileScreenNavigationPropType = PropsType['navigation'];

const Login: React.FC<PropsType> = () => {
  const navigation = useNavigation<ProfileScreenNavigationPropType>();

  const dispatch = useAppDispatch();

  const findRegisteredUser = async (name: string, password: string) => {
    const users = await AsyncStorage.getItem('users');
    console.log(users);
    // if (users) {
    //   const findName = users.find((user) => user.name === name);
    //   const matchPassword = users.find((user) => user.password === password);
    //   if (findName && matchPassword) {
    //     return true;
    //   }
    //   return false;
    // }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: fieldsValidation.email,
      password: fieldsValidation.password,
    }),
    onSubmit: async (values) => {
      try {
        const { email, password } = values;
        if (!findRegisteredUser(email, password)) {
          navigation.navigate('Registration');
        }
        await AsyncStorage.setItem('user', JSON.stringify(values));
        const currentUser = await AsyncStorage.getItem('user');
        dispatch(userSliceActions.setUser(currentUser));
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Login</Text>
        <Input
          label="Enter your name"
          errors={formik.touched.email ? formik.errors.email : undefined}
          touched={formik.touched.email || ''}
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

        <Button onPress={() => navigation.navigate('Registration')}>
          <Text>Go to registration</Text>
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
