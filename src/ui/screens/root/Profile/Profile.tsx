import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';
import { Notifier, NotifierComponents } from 'react-native-notifier';

import {
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useCurrentUser } from 'src/hooks/useCurrentUser';
import { fieldsValidation } from 'src/utils/validationFields';

import Input from 'src/ui/components/Input/Input';
import Button from 'src/ui/components/Button/Button';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Camera from 'src/ui/assets/Camera.svg';

import { styles } from './Profile.styles';

type UserProfileStackParamList = {
  Profile: undefined;
  ChangeUserPassword: undefined;
};

type Props = NativeStackScreenProps<UserProfileStackParamList, 'Profile'>;

type ProfileScreenNavigationProp = Props['navigation'];

const Profile: React.FC<Props> = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const { currentUser, logOutUser, deleteUserProfile, addUserAvatar } =
    useCurrentUser();

  const formik = useFormik({
    initialValues: {
      email: currentUser?.email || '',
    },
    validationSchema: Yup.object({
      email: fieldsValidation.email,
    }),
    onSubmit: async (values) => {
      try {
        const { email } = values;
        if (email === currentUser?.email) {
          formik.setErrors({ email: 'Email not changed' });
        } else {
          const newCurrentUser = {
            email,
            password: currentUser?.password,
          };

          await AsyncStorage.removeItem(`${currentUser?.email}`);

          await AsyncStorage.setItem(
            `${email}`,
            JSON.stringify(newCurrentUser),
          );

          await AsyncStorage.setItem(
            'currentUser',
            JSON.stringify(newCurrentUser),
          );

          Notifier.showNotification({
            title: 'Email is changed',
            Component: NotifierComponents.Alert,
            componentProps: {
              alertType: 'success',
            },
          });
        }
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
            <View style={styles.imageBox}>
              <TouchableOpacity
              style={styles.avatarButton}
                onPress={() => launchImageLibrary({ mediaType: 'photo' }, (e) => addUserAvatar(e))
                }
>
                <Camera />
              </TouchableOpacity>
              {currentUser.avatar && (
                <Image
                  style={styles.avatar}
                  source={{ uri: currentUser.avatar }}
                />
              )}
            </View>
            <View style={styles.infoBox}>
              <Input
                containerStyles={styles.inputContainer}
                label="Your Email"
                errors={formik.touched.email ? formik.errors.email : undefined}
                touched={formik.touched.email || ''}
                onChangeText={formik.handleChange('email')}
                value={formik.values.email}
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
                <Button onPress={() => logOutUser()}>
                  <Text style={styles.title}>LogOut</Text>
                </Button>
                <Button onPress={() => deleteUserProfile()}>
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
