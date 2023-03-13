import { StyleSheet } from 'react-native';
import { defaultColors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 5,
  },

  theme: {
    position: 'absolute',
    zIndex: 3,
    top: -20,
    left: -20,
  },

  avatar: {
    height: 200,
    width: 200,
    backgroundColor: defaultColors.background.main,
  },

  avatarButton: {
    position: 'absolute',
    backgroundColor: defaultColors.background.darkYelow,
    zIndex: 2,
    borderRadius: 20,
    padding: 7,
    margin: 10,
    bottom: 0,
    right: 0,
  },

  infoBox: {
    backgroundColor: defaultColors.background.main,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 20,
    width: '100%',
    padding: 30,
  },

  changePasswordBox: {
    backgroundColor: defaultColors.background.main,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 20,
    width: '100%',
    height: '60%',
  },

  buttonsBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 40,
  },

  imageBox: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: defaultColors.background.dark,
    justifyContent: 'center',
    height: 210,
    width: '55%',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: defaultColors.text.main,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 35,
    color: defaultColors.text.main,
  },

  button: {
    color: defaultColors.text.main,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: defaultColors.background.input,
    borderRadius: 10,
  },

  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },

  inputContainerPassword: {
    width: '100%',
    alignItems: 'center',
    margin: 10,
  },
});
