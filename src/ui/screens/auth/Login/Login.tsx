import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';

import { fieldsValidation } from 'src/utils/validationFields';
import type { RootStackParamList } from 'src/navigation';
import authUser from 'src/api/requests/authUserApi';

import Input from 'src/ui/components/Input';
import Button from 'src/ui/components/Button';

import { useCurrentUser } from 'src/hooks/useCurrentUser-DEV';
import { styles } from './Login.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

type ProfileScreenNavigationProp = Props['navigation'];

const Login: React.FC<Props> = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { setCurrentUserWithTokens } = useCurrentUser();

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
        const user = await authUser.login(email, password);
        setCurrentUserWithTokens(user.data);
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
        <Button onPress={formik.handleSubmit}>
          <Text style={styles.button}>Submit</Text>
        </Button>

        <Button onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.button}>Go to registration</Text>
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
