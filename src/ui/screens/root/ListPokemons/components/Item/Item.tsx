import axios from 'axios';
import type { IPokemon } from 'pokeapi-typescript';
import type { SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import { ActivityIndicator, Image, Text, View } from 'react-native';

import { styles } from './Item.styles';

type Props = {
  name: string;
  url: string;
};

const Item: React.FC<Props> = (props) => {
  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${props.name}/`,
        );
        setPokemon(
          result.data as unknown as SetStateAction<IPokemon | undefined>,
        );
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {!pokemon ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text style={styles.title}>{pokemon?.name}</Text>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: pokemon?.sprites.front_default,
            }}
          />
        </>
      )}
    </View>
  );
};

export default Item;
