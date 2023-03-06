import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';

import { useAppDispatch } from 'src/redux/store';
import { userSliceActions } from 'src/redux/slices/userSlice';

import { fieldsValidation } from 'src/utils/validationFields';
import type { RootStackParamList } from 'src/navigation';

import Input from 'src/ui/components/Input';
import Button from 'src/ui/components/Button';

import { styles } from './Login.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

type ProfileScreenNavigationProp = Props['navigation'];

const Login: React.FC<Props> = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const dispatch = useAppDispatch();

  const findRegisteredUser = async (email: string, password: string) => {
    const registeredUser = await AsyncStorage.getItem(email);
    if (registeredUser?.includes(password)) {
      return registeredUser;
    }
    return formik.setErrors({ email: 'Need registration' });
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
        const loginUser = await findRegisteredUser(email, password);
        if (loginUser) {
          console.log(loginUser);
          await AsyncStorage.setItem('currentUser', JSON.stringify(values));
          dispatch(userSliceActions.setUser(loginUser));
        }
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
          onChangeText={formik.handleChange('email')}
          {...formik.getFieldProps('email')}
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
