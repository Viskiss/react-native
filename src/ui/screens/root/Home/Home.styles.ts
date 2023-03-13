import { StyleSheet } from 'react-native';
import { defaultColors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  pokemonBackground: {
    backgroundColor: 'red',
    width: 350,
    borderRadius: 20,
  },

  userName: {
    fontWeight: 'bold',
    color: defaultColors.text.error,
  },

  tinyLogo: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
  },

  rundomPokemon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    margin: 15,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 30,
    color: defaultColors.text.main,
    marginBottom: 20,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: defaultColors.text.main,
  },
});
