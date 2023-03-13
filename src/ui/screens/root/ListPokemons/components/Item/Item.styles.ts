import { StyleSheet } from 'react-native';
import { defaultColors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: defaultColors.colors.yelow,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 5,
  },

  tinyLogo: {
    width: 100,
    height: 100,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: defaultColors.colors.darkYelow,
  },
});
