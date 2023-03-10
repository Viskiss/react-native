import type { FormikTouched } from 'formik';
import React, { useState } from 'react';

import type { StyleProp, TextInputProps, ViewStyle } from 'react-native';
import { Text, TextInput, View } from 'react-native';

import { styles } from './Input.styles';

type Props = {
  onChangeText: ((text: string) => void) | undefined;
  containerStyles?: StyleProp<ViewStyle>;
  activeInputStyles?: StyleProp<ViewStyle>;
  inputStyles?: StyleProp<ViewStyle>;
  value: string;
  label?: string;
  errors?: string | undefined;
  touched?: FormikTouched<unknown>;
} & TextInputProps;

const Input: React.FC<Props> = (props: Props) => {
  const {
    containerStyles,
    label,
    errors,
    touched,
    activeInputStyles,
    inputStyles,
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={containerStyles || styles.container}>
      <TextInput
        {...props}
        style={
          isFocused ? activeInputStyles || styles.inputActive
            : inputStyles || styles.input
        }
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
      {touched && errors ? (
        <Text style={styles.labelError}>{errors}</Text>
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
    </View>
  );
};

export default Input;
