import { StyleSheet } from 'react-native';
import { defoultColors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },

  input: {
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 5,
    borderColor: defoultColors.background.yelow,
    borderWidth: 2,
    backgroundColor: defoultColors.background.input,
    width: '80%',
    height: 50,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },

  inputActive: {
    backgroundColor: defoultColors.background.input,
  },

  labelError: {
    color: 'red',
    fontWeight: 'bold',
  },

  label: {
    color: defoultColors.text.main,
    fontWeight: 'bold',
  },
});
