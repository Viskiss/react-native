import { StyleSheet } from 'react-native';
import { defoultColors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    color: defoultColors.text.main,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: defoultColors.background.input,
    borderRadius: 10,
  },
});
