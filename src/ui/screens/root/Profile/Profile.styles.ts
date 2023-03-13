import { StyleSheet } from 'react-native';
import { defoultColors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 5,
  },

  avatar: {
    height: 200,
    width: 200,
    backgroundColor: defoultColors.background.auth,
  },

  avatarButton: {
    position: 'absolute',
    backgroundColor: defoultColors.background.button,
    zIndex: 2,
    borderRadius: 20,
    padding: 7,
    margin: 10,
    bottom: 0,
    right: 0,
  },

  infoBox: {
    backgroundColor: defoultColors.background.button,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 20,
    width: '100%',
    padding: 30,
  },

  changePasswordBox: {
    backgroundColor: defoultColors.background.button,
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
    borderColor: defoultColors.background.button,
    justifyContent: 'center',
    height: 210,
    width: '55%',
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

  button: {
    color: defoultColors.text.main,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: defoultColors.background.input,
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
