import { StyleSheet } from 'react-native';
import { defaultColors } from 'src/constants/colors';

export const getStyles = (paddingBottom: number) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: defaultColors.background.main,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingBottom,
  },

  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: defaultColors.text.main,
    fontWeight: 'bold',
  },

  textActive: {
    color: defaultColors.background.yelow,
    fontWeight: 'bold',
  },
});
