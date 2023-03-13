import type {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import type {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { defoultColors } from 'src/constants/colors';

import HomeLogo from 'src/ui/assets/Home.svg';
import ListLogo from 'src/ui/assets/List.svg';
import ProfileLogo from 'src/ui/assets/Profile.svg';

import { getStyles } from './CustomTabBar.styles';

type TabBarProps = {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

const MyTabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();

  const styles = getStyles(insets.bottom);

  const getIcon = (label: string, fill: string) => {
    if (label === 'Home') {
      return <HomeLogo fill={fill} />;
    }
    if (label === 'Profile') {
      return <ProfileLogo fill={fill} />;
    }
    return <ListLogo fill={fill} />;
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
              {getIcon(
                label,
                !isFocused
                  ? defoultColors.text.main
                  : defoultColors.background.yelow,
              )}

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
