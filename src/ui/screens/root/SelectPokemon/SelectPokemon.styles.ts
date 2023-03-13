import { StyleSheet } from 'react-native';
import { defaultColors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    margin: 10,
  },

  infoBox: {
    backgroundColor: defaultColors.background.main,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },

  imageBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 300,
    height: 300,
  },

  tityImage: {
    width: 140,
    height: 140,
  },

  titleName: {
    position: 'absolute',
    top: -35,
    backgroundColor: defaultColors.background.input,
    borderRadius: 20,
    fontWeight: 'bold',
    fontSize: 35,
    color: defaultColors.text.main,
    padding: 10,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: defaultColors.background.yelow,
  },
});
