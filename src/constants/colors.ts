import { DefaultTheme } from '@react-navigation/native';

export const defaultColors = {
  ...DefaultTheme,
  text: {
    main: '#3b599a',
    error: '#fc7878',
  },

  background: {
    main: '#0075BE',
    dark: '#0A285F',
    yelow: '#FFCC00',
    darkYelow: '#D5A100',
    button: '#fc7878',
    input: '#f3f6f4',
  },
};

export const darkTheme = {
  ...DefaultTheme,
  text: {
    main: '#3b599a',
    error: '#fc7878',
  },

  background: {
    main: 'red',
    dark: '#0A285F',
    yelow: '#FFCC00',
    darkYelow: '#D5A100',
    button: '#fc7878',
    input: '#f3f6f4',
  },
};
