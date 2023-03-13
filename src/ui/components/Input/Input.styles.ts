import { StyleSheet } from 'react-native';
import { defaultColors } from 'src/constants/colors';

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
    borderColor: defaultColors.background.yelow,
    borderWidth: 2,
    backgroundColor: defaultColors.background.input,
    width: '80%',
    height: 50,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },

  inputActive: {
    backgroundColor: defaultColors.background.input,
  },

  labelError: {
    color: 'red',
    fontWeight: 'bold',
  },

  label: {
    color: defaultColors.text.main,
    fontWeight: 'bold',
  },
});
