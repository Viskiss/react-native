import { StyleSheet } from 'react-native';

import { defaultColors } from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultColors.colors.main,
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
    color: defaultColors.colors.yelow,
    backgroundColor: defaultColors.colors.dark,
    padding: 10,
    borderRadius: 20,
  },

  button: {
    color: defaultColors.colors.darkYelow,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
});
