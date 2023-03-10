import { StyleSheet } from 'react-native';
import { defoultColors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  userName: {
    fontWeight: 'bold',
    color: defoultColors.text.error,
  },

  tinyLogo: {
    width: 150,
    height: 150,
  },

  rundomPokemon: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: defoultColors.text.main,
  },
});
