import React from 'react';

import type { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native';

import { TouchableOpacity, View } from 'react-native';

import { styles } from './Button.styles';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
} & React.PropsWithChildren & TouchableOpacityProps;

const Button: React.FC<Props> = (props: Props) => {
  const { containerStyle, children } = props;
  return (
    <TouchableOpacity {...props}>
      <View style={[styles.container, containerStyle]}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
