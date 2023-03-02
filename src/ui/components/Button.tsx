import React from 'react';
import type {
  GestureResponderEvent } from 'react-native';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type PropsType = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
} & React.PropsWithChildren;

const Button: React.FC<PropsType> = (props: PropsType) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333030',
    backgroundColor: '#d0cece',
  },
  text: {
    fontSize: 20,
    color: '#000',
    padding: 5,
    fontWeight: 'bold',
  },
});

export default Button;
