import type { FormikTouched } from 'formik';
import React, { useState } from 'react';

import type { StyleProp, ViewStyle } from 'react-native';
import { Text, TextInput, View } from 'react-native';

import { styles } from './Input.styles';

type PropsType = {
  onChangeText: ((text: string) => void) | undefined;
  containerStyles?: StyleProp<ViewStyle>;
  activeInputStyles?: StyleProp<ViewStyle>;
  inputStyles?: StyleProp<ViewStyle>;
  value: string;
  label?: string;
  errors?: string | undefined;
  touched?: FormikTouched<unknown>;
};

const Input: React.FC<PropsType> = (props: PropsType) => {
  const {
    onChangeText,
    containerStyles,
    value,
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
        style={
          isFocused ? activeInputStyles || styles.inputActive
            : inputStyles || styles.input
        }
        onChangeText={onChangeText}
        value={value}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
      {touched && errors ? (
        <Text style={styles.labelError}>{errors}</Text>
      ) : (
        <Text>{label}</Text>
      )}
    </View>
  );
};

export default Input;