import { StyleSheet } from 'react-native';
import { defoultColors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  input: {
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 5,
    backgroundColor: defoultColors.background.input,
    width: '80%',
  },
  inputActive: {
    borderWidth: 3,
    borderColor: defoultColors.text.main,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 5,
    backgroundColor: defoultColors.background.input,
    width: '80%',
    fontWeight: 'bold',
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
