import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';

import { useCurrentUser } from 'src/hooks/useCurrentUser';

import { fieldsValidation } from 'src/utils/validationFields';

import Button from 'src/ui/components/Button/Button';
import Input from 'src/ui/components/Input/Input';

import { styles } from './Registration.styles';

const Registration: React.FC = () => {
  const { setCurrentUser } = useCurrentUser();

  const findDubleEmail = async (email: string) => {
    const registeredEmail = await AsyncStorage.getItem(email);
    if (registeredEmail) {
      formik.setErrors({ email: 'This email is registered' });
    } else {
      return false;
    }
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: Yup.object({
      email: fieldsValidation.email,
      password: fieldsValidation.password,
      repeatPassword: fieldsValidation.repeatPassword,
    }),
    onSubmit: async (values) => {
      const { email, password } = values;
      const newUser = {
        email,
        password,
        avatar: null,
      };
      try {
        if ((await findDubleEmail(email)) === false) {
          await AsyncStorage.setItem('currentUser', JSON.stringify(newUser));

          await AsyncStorage.setItem(
            `${newUser.email}`,
            JSON.stringify(newUser),
          );
          setCurrentUser();
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
          label="Enter your Email"
          errors={formik.touched.email ? formik.errors.email : undefined}
          touched={formik.touched.email || ''}
          onChangeText={formik.handleChange('email')}
          value={formik.values.email}
        />

        <Input
          label="Enter your Password"
          errors={formik.touched.password ? formik.errors.password : undefined}
          touched={formik.touched.password || ''}
          onChangeText={formik.handleChange('password')}
          value={formik.values.password}
        />

        <Input
          label="Repeat your Password"
          errors={
            formik.touched.repeatPassword
              ? formik.errors.repeatPassword
              : undefined
          }
          touched={formik.touched.repeatPassword || ''}
          onChangeText={formik.handleChange('repeatPassword')}
          value={formik.values.repeatPassword}
        />
        <Button onPress={formik.handleSubmit}>
          <Text style={styles.button}>Submit</Text>
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Registration;
