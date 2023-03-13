import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Notifier, NotifierComponents } from 'react-native-notifier';

import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';

import { useCurrentUser } from 'src/hooks/useCurrentUser';
import { fieldsValidation } from 'src/utils/validationFields';

import Input from 'src/ui/components/Input/Input';
import Button from 'src/ui/components/Button/Button';

import { useTheme } from '@react-navigation/native';
import { styles } from '../Profile.styles';

const ChangeUserPassword: React.FC = () => {
  const { colors } = useTheme();
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

        Notifier.showNotification({
          title: 'Password is changed',
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'success',
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={[styles.changePasswordBox, { backgroundColor: colors.primary }]}>
          <Input
            label="Enter your current Passsword"
            errors={
              formik.touched.currentPassword
                ? formik.errors.currentPassword
                : undefined
            }
            touched={formik.touched.currentPassword || ''}
            onChangeText={formik.handleChange('currentPassword')}
            value={formik.values.currentPassword}
          />

          <Input
            label="Enter your new Password"
            errors={
              formik.touched.newPassword ? formik.errors.newPassword : undefined
            }
            touched={formik.touched.newPassword || ''}
            onChangeText={formik.handleChange('newPassword')}
            value={formik.values.newPassword}
          />

          <Input
            label="Repeat your new Password"
            errors={
              formik.touched.repeatNewPassword
                ? formik.errors.repeatNewPassword
                : undefined
            }
            touched={formik.touched.repeatNewPassword || ''}
            onChangeText={formik.handleChange('repeatNewPassword')}
            value={formik.values.repeatNewPassword}
          />

          <Button onPress={formik.handleSubmit}>
            <Text style={styles.title}>Submit</Text>
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChangeUserPassword;
