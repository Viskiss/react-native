import * as Yup from 'yup';

export const fieldsValidation = {
  name: Yup.string()
    .min(5, 'Min 5 length')
    .required('Name required'),
  password: Yup.string()
    .lowercase()
    .min(5, 'The password is too short(min 5)')
    .trim()
    .required('Password required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please retype your password.'),
};
