import { StyleSheet } from 'react-native';
import { defoultColors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: defoultColors.background.auth,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    height: '100%',
    gap: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 150,
  },

  screenTitle: {
    position: 'absolute',
    top: -30,
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 35,
    color: defoultColors.text.main,
    backgroundColor: defoultColors.background.input,
    padding: 10,
    borderRadius: 20,
  },

  button: {
    color: defoultColors.text.main,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: defoultColors.background.button,
    borderRadius: 10,
  },

  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
