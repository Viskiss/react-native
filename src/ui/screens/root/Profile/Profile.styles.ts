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
    top: 0,
    left: 0,
  },

  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },

  avatarButton: {
    position: 'absolute',
    zIndex: 2,
    borderRadius: 20,
    padding: 7,
    margin: 10,
    bottom: 0,
    right: 0,
  },

  infoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 20,
    width: '100%',
    padding: 30,
  },

  changePasswordBox: {
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
    justifyContent: 'center',
    height: 210,
    width: '55%',
    borderRadius: 100,
    marginBottom: 40,
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
