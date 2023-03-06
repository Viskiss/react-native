import React from 'react';

import type { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

import { TouchableOpacity, View } from 'react-native';

import { styles } from './Button.styles';

type Props = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  containerStyle?: StyleProp<ViewStyle>;
} & React.PropsWithChildren;

const Button: React.FC<Props> = (props: Props) => {
  const { containerStyle, children } = props;
  return (
    <TouchableOpacity {...props}>
      <View style={ containerStyle || styles.container}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
