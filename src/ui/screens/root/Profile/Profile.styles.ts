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

  avatar: {
    height: 200,
    width: 200,
    backgroundColor: defoultColors.background.auth,
  },

  infoBox: {
    backgroundColor: defoultColors.background.button,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: '100%',
    paddingTop: 60,
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  image: {
    width: 300,
    height: 300,
  },

  imageBox: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: defoultColors.background.button,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    height: 200,
    width: '70%',
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
    marginTop: -400,
    marginBottom: 20,
  },

  inputContainerPassword: {
    width: '100%',
    alignItems: 'center',
    margin: 10,
  },
});
