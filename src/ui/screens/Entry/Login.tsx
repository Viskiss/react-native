import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { usersSliceActions } from '../../../redux/slices/usersSlice';

import { fieldsValidation } from '../../../utils/validationFields';
import type { RootStackParamListType } from '../../../navigation/Navigation';

import Input from '../../components/Input';
import Button from '../../components/Button';

type PropsType = NativeStackScreenProps<RootStackParamListType, 'Login'>;

type ProfileScreenNavigationPropType = PropsType['navigation'];

const Login: React.FC<PropsType> = () => {
  const navigation = useNavigation<ProfileScreenNavigationPropType>();

  const users = useAppSelector((state) => state.usersStore.users);

  const dispatch = useAppDispatch();

  const findRegisteredUser = (name: string, password: string) => {
    const findName = users.find((user) => user.name === name);
    const matchPassword = users.find((user) => user.password === password);
    if (findName && matchPassword) {
      return true;
    }
    return false;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: fieldsValidation.name,
      password: fieldsValidation.password,
    }),
    onSubmit: async (values) => {
      try {
        const { name, password } = values;
        if (!findRegisteredUser(name, password)) {
          navigation.navigate('Registration');
        }
        await AsyncStorage.setItem('user', JSON.stringify(values));
        const currentUser = await AsyncStorage.getItem('user');
        dispatch(usersSliceActions.login(currentUser));
      } catch (error) {
        // eslint-disable-next-line no-console
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

        <Button onPress={() => navigation.navigate('Registration')}>
          <Text>Go to registration</Text>
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    gap: 10,
  },
  screenTitle: {
    marginBottom: 20,
    fontSize: 30,
    color: '#000',
  },
});

export default Login;
