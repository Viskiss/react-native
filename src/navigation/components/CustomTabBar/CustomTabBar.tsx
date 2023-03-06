import type {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import type {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import home from 'src/ui/assets/Home.svg';
import list from 'src/ui/assets/List.svg';
import profile from 'src/ui/assets/Profile.svg';

import { styles } from './CustomTabBar.styles';

type TabBarProps = {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

const MyTabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {
  const getIcon = (label: string) => {
    if (label === 'Home') {
      return home;
    }
    if (label === 'Profile') {
      return profile;
    }
    return list;
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title !== undefined ? options.title : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.item}
            key={label}
>
            <Image style={styles.image} source={getIcon(label)} />
            <Text style={!isFocused ? styles.text : styles.textActive}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;
