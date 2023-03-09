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
    height: 50,
    padding: 10,
  },
  inputActive: {
    borderWidth: 3,
    borderColor: defoultColors.text.main,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 5,
    backgroundColor: defoultColors.background.input,
    height: 50,
    width: '80%',
    fontWeight: 'bold',
    padding: 10,
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
