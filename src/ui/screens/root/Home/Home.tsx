import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { IPokemon } from 'pokeapi-typescript';

import { ActivityIndicator, Image, Text, View } from 'react-native';

import { useCurrentUser } from 'src/hooks/useCurrentUser';
import type { MainTabParamList } from 'src/navigation/components/MainTab';

import { styles } from './Home.styles';

type Props = NativeStackScreenProps<MainTabParamList, 'Home'>;

const Home: React.FC<Props> = () => {
  const { currentUser } = useCurrentUser();
  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    (async () => {
      try {
        const ramdomPokemonId = -Math.round(
          1 - 0.5 + Math.random() * (1 - 100 + 1),
        );

        const ramdomPokemon = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${ramdomPokemonId}/`,
        );

        setPokemon(ramdomPokemon.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {!pokemon ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.userName}>{currentUser?.email}</Text>

          <View style={styles.rundomPokemon}>
            <Text style={styles.title}>{pokemon?.name}</Text>

            <Text style={styles.title}>
              Height: {pokemon?.height}
            </Text>

            <Text style={styles.title}>
              Weight: {pokemon?.weight}
            </Text>

            <Image
              style={styles.tinyLogo}
              source={{
                uri: pokemon?.sprites.front_default,
              }}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Home;
