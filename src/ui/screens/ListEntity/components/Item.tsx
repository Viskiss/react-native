import type { IPokemon } from 'pokeapi-typescript';
import PokeAPI from 'pokeapi-typescript';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type PropsType = {
  name: string;
  url: string;
};

const Item: React.FC<PropsType> = (props) => {
  const [pokemon, setPokemon] = useState<IPokemon>();
  useEffect(() => {
    (async () => {
      try {
        const result = PokeAPI.Pokemon.get(props.name);
        // eslint-disable-next-line no-console
        setPokemon(result);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <Text>{pokemon?.name}</Text>
      <Text>{pokemon?.id}</Text>
      <Text>{pokemon?.height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});

export default Item;
