import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';
import type { IPokemon } from 'pokeapi-typescript';
import type { SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import { ActivityIndicator, Image, Text, View } from 'react-native';
import type { PokemonStackParamList } from 'src/navigation/components/PokemonListStack';
import Button from 'src/ui/components/Button/Button';

import { styles } from './Item.styles';

type Props = {
  name: string;
  url: string;
} & NativeStackScreenProps<PokemonStackParamList, 'ListPokemons'>;

type ProfileScreenNavigationProp = Props['navigation'];

const Item: React.FC<Props> = (props) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

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
          <Button onPress={() => navigation.navigate('SelectPokemon', {
            url: props.url,
          })}
          >
            <Image
              style={styles.tinyLogo}
              source={{
                uri: pokemon?.sprites.front_default,
              }}
            />
          </Button>
        </>
      )}
    </View>
  );
};

export default Item;
