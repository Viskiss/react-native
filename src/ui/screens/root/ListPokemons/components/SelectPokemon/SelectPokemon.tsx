import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { IPokemon } from 'pokeapi-typescript';

import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';

import type { PokemonStackParamList } from 'src/navigation/components/PokemonListStack';

import { styles } from './SelectPokemon.styles';

type Props = NativeStackScreenProps<PokemonStackParamList, 'SelectPokemon'>;

const SelectPokemon: React.FC<Props> = ({ route }) => {
  const url = route.params?.url;
  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    (async () => {
      try {
        const pokemon = await axios.get(`${url}`);
        setPokemon(pokemon.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const getArrImages = React.useMemo(() => {
    if (pokemon?.sprites) {
      const values = Object.values(pokemon?.sprites as object);

      // eslint-disable-next-line array-callback-return
      return values.filter((image) => {
        if (image !== null && !(image instanceof Object)) {
          return image;
        }
      });
    }
  }, [pokemon]);

  return (
    <View style={styles.container}>
      {!pokemon ? (
        <ActivityIndicator />
      ) : (
        <>
          <Image
            style={styles.image}
            source={{
              uri: pokemon?.sprites.front_default,
            }}
          />
          <View style={styles.imageBox}>
             <FlatList
            numColumns={3}
            data={getArrImages}
            renderItem={({ item }) => (
              <Image style={styles.tityImage} source={{ uri: item }} />
            )}
            keyExtractor={(item) => item}
          />
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.titleName}>{pokemon?.name}</Text>
            <Text>Height :{pokemon?.height}</Text>
            <Text>Weight :{pokemon?.weight}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default SelectPokemon;
