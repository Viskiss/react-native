import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Notifier, NotifierComponents } from 'react-native-notifier';

import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';

import { useCurrentUser } from 'src/hooks/useCurrentUser';
import { fieldsValidation } from 'src/utils/validationFields';
import updateUser from 'src/api/requests/updateUserApi';

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
      const { currentPassword, newPassword, repeatNewPassword } = values;
      if (newPassword !== repeatNewPassword) {
        formik.setErrors({ repeatNewPassword: 'Retype new password' });
      } else {
        try {
          await updateUser
            .updatePasswordUser(currentPassword, newPassword, currentUser?.id || 0)
            .then(() => {
              Notifier.showNotification({
                title: 'Password is changed',
                Component: NotifierComponents.Alert,
                componentProps: {
                  alertType: 'success',
                },
              });
            });
        } catch (error) {
          console.log(error);
        }
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
