import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Notifier, NotifierComponents } from 'react-native-notifier';

import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';

import { useNavigation, useTheme } from '@react-navigation/native';

import { useCurrentUser } from 'src/hooks/useCurrentUser-DEV';
import { fieldsValidation } from 'src/utils/validationFields';
import updateUser from 'src/api/requests/updateUserApi';

import Input from 'src/ui/components/Input/Input';
import Button from 'src/ui/components/Button/Button';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './Profile.styles';
import Avatar from './components/Avatar';

type UserProfileStackParamList = {
  Profile: undefined;
  ChangeUserPassword: undefined;
};

type Props = NativeStackScreenProps<UserProfileStackParamList, 'Profile'>;

type ProfileScreenNavigationProp = Props['navigation'];

const Profile: React.FC<Props> = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const { currentUser, logOutUser, deleteUserProfile } = useCurrentUser();

  const formik = useFormik({
    initialValues: {
      email: currentUser?.email || '',
      fullName: currentUser?.fullName || '',
    },
    validationSchema: Yup.object({
      email: fieldsValidation.email,
      fullName: fieldsValidation.fullName,
    }),
    onSubmit: async (values) => {
      try {
        const { email, fullName } = values;

        await updateUser
          .updateUser(email, fullName, currentUser?.id || 0)
          .then(() => {
            Notifier.showNotification({
              title: 'Data is changed',
              Component: NotifierComponents.Alert,
              componentProps: {
                alertType: 'success',
              },
            });
          });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        {currentUser && (
          <>
            <Avatar />
            <View style={[styles.infoBox, { backgroundColor: colors.primary }]}>
              <Input
                containerStyles={styles.inputContainer}
                label="Your Email"
                errors={formik.touched.email ? formik.errors.email : undefined}
                touched={formik.touched.email || ''}
                onChangeText={formik.handleChange('email')}
                value={formik.values.email}
              />

              <Input
                containerStyles={styles.inputContainer}
                label="Your Full name"
                errors={
                  formik.touched.fullName ? formik.errors.fullName : undefined
                }
                touched={formik.touched.fullName || ''}
                onChangeText={formik.handleChange('fullName')}
                value={formik.values.fullName}
              />

              <Button onPress={formik.handleSubmit}>
                <Text style={styles.title}>Submit</Text>
              </Button>

              <View style={styles.buttonsBox}>
                <Button
                  onPress={() => navigation.navigate('ChangeUserPassword')}
>
                  <Text style={styles.title}>Change password</Text>
                </Button>
                <Button onPress={logOutUser}>
                  <Text style={styles.title}>LogOut</Text>
                </Button>
                <Button onPress={deleteUserProfile}>
                  <Text style={styles.title}>Delete profile</Text>
                </Button>
              </View>
            </View>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Profile;
