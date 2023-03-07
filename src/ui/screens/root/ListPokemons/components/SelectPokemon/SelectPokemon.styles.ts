import { StyleSheet } from 'react-native';
import { defoultColors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    padding: 5,
  },

  infoBox: {
    backgroundColor: defoultColors.background.button,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: '40%',
  },

  image: {
    width: 300,
    height: 300,
  },

  imageBox: {
    borderWidth: 2,
    borderColor: defoultColors.background.button,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    height: 150,
  },

  tityImage: {
    width: 110,
    height: 110,
  },

  titleName: {
    position: 'absolute',
    top: -35,
    backgroundColor: defoultColors.background.input,
    borderRadius: 20,
    fontWeight: 'bold',
    fontSize: 35,
    color: defoultColors.text.main,
    padding: 10,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: defoultColors.text.main,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 35,
    color: defoultColors.text.main,
  },
});
