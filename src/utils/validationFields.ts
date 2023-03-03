import * as Yup from 'yup';

export const fieldsValidation = {
  email: Yup.string()
    .email('Email must be a valid email')
    .min(10, 'Min 10 length, Ex: 123@mail.ru')
    .required(),
  password: Yup.string()
    .lowercase()
    .min(5, 'The password is too short(min 5)')
    .trim()
    .required('Password required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please retype your password.'),
};
