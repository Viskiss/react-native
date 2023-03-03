import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';

import { useAppDispatch } from 'src/redux/store';
import { usersSliceActions } from 'src/redux/slices/userSlice';

import { fieldsValidation } from 'src/utils/validationFields';

import Button from 'src/ui/components/Button/Button';
import Input from 'src/ui/components/Input/Input';

import { styles } from './Registration.styles';

const Registration: React.FC = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: Yup.object({
      name: fieldsValidation.name,
      password: fieldsValidation.password,
      repeatPassword: fieldsValidation.repeatPassword,
    }),
    onSubmit: async (values) => {
      try {
        await AsyncStorage.setItem('user', JSON.stringify(values));
        const currentUser = await AsyncStorage.getItem('user');
        if (currentUser) {
          dispatch(usersSliceActions.registration(JSON.parse(currentUser)));
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
      <Text style={styles.screenTitle}>Registration</Text>
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

      <Input
        label="Repeat your password"
        errors={
          formik.touched.repeatPassword
            ? formik.errors.repeatPassword
            : undefined
        }
        touched={formik.touched.repeatPassword || ''}
        onChangeText={formik.handleChange('repeatPassword')}
        {...formik.getFieldProps('repeatPassword')}
      />
      <Button onPress={formik.handleSubmit}>
        <Text>Submit</Text>
      </Button>
      </View>
    </TouchableWithoutFeedback>

  );
};

export default Registration;
