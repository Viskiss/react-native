import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';

import { useCurrentUser } from 'src/hooks/useCurrentUser';
import { fieldsValidation } from 'src/utils/validationFields';

import Input from 'src/ui/components/Input/Input';
import Button from 'src/ui/components/Button/Button';

import { styles } from '../Profile.styles';

const ChangeUserPassword: React.FC = () => {
  const { currentUser } = useCurrentUser();

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      repeatNewPassword: '',
    },
    validationSchema: Yup.object({
      newPassword: fieldsValidation.password,
      repeatNewPassword: fieldsValidation.repeatPassword,
    }),
    onSubmit: async (values) => {
      try {
        const { currentPassword, newPassword, repeatNewPassword } = values;
        if (currentPassword !== currentUser?.password) {
          formik.setErrors({ currentPassword: 'Enter your password' });
        } else if (currentPassword === newPassword) {
          formik.setErrors({ newPassword: 'Passwords must be different' });
        } else if (newPassword !== repeatNewPassword) {
          formik.setErrors({ repeatNewPassword: 'Passwords must be the same' });
        }
        const user = {
          email: currentUser?.email,
          password: newPassword,
        };

        await AsyncStorage.mergeItem(
          `${currentUser?.email}`,
          JSON.stringify(user),
        );

        await AsyncStorage.mergeItem('currentUser', JSON.stringify(user));
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.changePasswordBox}>
          <Input
            containerStyles={styles.inputContainerPassword}
            label="Enter your current Passsword"
            errors={
              formik.touched.currentPassword
                ? formik.errors.currentPassword
                : undefined
            }
            touched={formik.touched.currentPassword || ''}
            onChangeText={formik.handleChange('currentPassword')}
            {...formik.getFieldProps('currentPassword')}
          />

          <Input
            containerStyles={styles.inputContainerPassword}
            label="Enter your new Password"
            errors={
              formik.touched.newPassword ? formik.errors.newPassword : undefined
            }
            touched={formik.touched.newPassword || ''}
            onChangeText={formik.handleChange('newPassword')}
            {...formik.getFieldProps('newPassword')}
          />

          <Input
            containerStyles={styles.inputContainerPassword}
            label="Repeat your new Password"
            errors={
              formik.touched.repeatNewPassword
                ? formik.errors.repeatNewPassword
                : undefined
            }
            touched={formik.touched.repeatNewPassword || ''}
            onChangeText={formik.handleChange('repeatNewPassword')}
            {...formik.getFieldProps('repeatNewPassword')}
          />

          <Button onPress={formik.handleSubmit}>
            <Text style={styles.button}>Submit</Text>
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChangeUserPassword;
