import { StyleSheet } from 'react-native';
import { defaultColors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    color: defaultColors.text.main,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: defaultColors.colors.input,
    borderRadius: 10,
  },
});
