import React from 'react';

import type { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './Button.styles';

type Props = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
} & React.PropsWithChildren;

const Button: React.FC<Props> = (props: Props) => {
  const { containerStyle, textStyle, children } = props;
  return (
    <TouchableOpacity {...props}>
      <View style={ containerStyle || styles.container}>
        <Text style={ textStyle || styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
