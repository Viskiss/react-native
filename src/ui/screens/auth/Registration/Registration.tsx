import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';

import { useCurrentUser } from 'src/hooks/useCurrentUser-DEV';
import authUser from 'src/api/requests/authUserApi';

import { fieldsValidation } from 'src/utils/validationFields';

import Button from 'src/ui/components/Button/Button';
import Input from 'src/ui/components/Input/Input';

import { styles } from './Registration.styles';

const Registration: React.FC = () => {
  const { setCurrentUserWithTokens } = useCurrentUser();

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
      const { email, password, repeatPassword } = values;
      if (password !== repeatPassword) {
        formik.setErrors({ repeatPassword: 'Passwords must be the same' });
      } else {
        try {
          const user = await authUser.registration(email, password);
          setCurrentUserWithTokens(user.data);
        } catch (error) {
          console.log(error);
        }
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
