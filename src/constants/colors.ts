import { DefaultTheme } from '@react-navigation/native';

export const defaultColors = {
  ...DefaultTheme,
  text: {
    main: '#3b599a',
    error: '#fc7878',
  },

  colors: {
    ...DefaultTheme.colors,
    main: '#0075BE',
    dark: '#0A285F',
    yelow: '#FFCC00',
    darkYelow: '#D5A100',
    button: '#fc7878',
    input: '#f3f6f4',

    primary: '#0075BE',
    background: '#f6f7f8',
    card: '#D5A100',
    text: '#0A285F',
    border: '#fc7878',
    notification: '#FFCC00',
  },

};

export const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0A285F',
    text: '#FFCC00',
  },
};
