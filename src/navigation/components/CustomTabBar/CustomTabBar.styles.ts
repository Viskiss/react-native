import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#BFCC94',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  item: {
    alignItems: 'center',
  },
  image: {
    backgroundColor: 'white',
  },
  text: {
    color: '#344966',
    fontWeight: 'bold',
  },
  textActive: {
    color: '#F0F4EF',
    fontWeight: 'bold',
  },
});
