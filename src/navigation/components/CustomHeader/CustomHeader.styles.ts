import { StyleSheet } from 'react-native';
import { defaultColors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 30,
  },

  title: {
    color: defaultColors.text.main,
    fontWeight: 'bold',
    fontSize: 20,
  },

  imageBox: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 100,
    position: 'absolute',
    right: 0,
  },

  avatar: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
});
