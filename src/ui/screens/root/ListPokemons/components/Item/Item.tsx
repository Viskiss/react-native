import { useNavigation, useTheme } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';
import type { IPokemon } from 'pokeapi-typescript';
import type { SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './Item.styles';

export type PokemonStackParamList = {
  ListPokemons: undefined;
  SelectPokemon: undefined | {url: string};
};

type Props = {
  name: string;
  url: string;
} & NativeStackScreenProps<PokemonStackParamList, 'ListPokemons'>;

type PokemonScreenNavigationProp = Props['navigation'];

const Item: React.FC<Props> = (props) => {
  const { colors } = useTheme();
  const navigation = useNavigation<PokemonScreenNavigationProp>();

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
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      {!pokemon ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text style={[styles.title, { color: colors.text }]}>{pokemon?.name}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SelectPokemon', {
              url: props.url,
            })
            }
>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: pokemon?.sprites.front_default,
              }}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Item;
