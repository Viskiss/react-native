import { StyleSheet } from 'react-native';
import { defoultColors } from 'src/constants/colors';

export const getStyles = (paddingBottom: number) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: defoultColors.background.button,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingBottom,
  },

  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: defoultColors.text.main,
    fontWeight: 'bold',
  },

  textActive: {
    color: defoultColors.text.opacity,
    fontWeight: 'bold',
  },
});
