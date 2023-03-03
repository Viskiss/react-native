import React from 'react';

import type { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './Button.styles';

type PropsType = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
} & React.PropsWithChildren;

const Button: React.FC<PropsType> = (props: PropsType) => {
  const { onPress, containerStyle, textStyle, children } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={ textStyle || styles.container}>
        <Text style={ containerStyle || styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
