import axios from 'axios';
import type { IPokemon } from 'pokeapi-typescript';
import type { SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import { Image, Text, View } from 'react-native';

import { styles } from './Item.styles';

type PropsType = {
  name: string;
  url: string;
};

const Item: React.FC<PropsType> = (props) => {
  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}/`);
        setPokemon(result.data as unknown as SetStateAction<IPokemon | undefined>);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pokemon?.name}</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: pokemon?.sprites.front_default,
        }}
      />
    </View>
  );
};

export default Item;
