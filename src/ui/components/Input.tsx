import type { FormikTouched } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

type PropsType = {
  onChangeText: ((text: string) => void) | undefined;
  value: string;
  label?: string;
  errors?: string | undefined;
  touched?: FormikTouched<unknown>;
};

const Input: React.FC<PropsType> = (props: PropsType) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        style={isFocused ? styles.inputActive : styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
      {props.touched && props.errors ? (
        <Text style={styles.labelError}>{props.errors}</Text>
      ) : (
        <Text>{props.label}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  input: {
    borderRadius: 20,
    backgroundColor: '#d0cece',
  },
  inputActive: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#333030',
  },
  labelError: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default Input;
