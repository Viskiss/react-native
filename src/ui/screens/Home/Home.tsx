import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { IPokemon } from 'pokeapi-typescript';

import axios from 'axios';
import type { MainTabParamListType } from '../../../navigation/components/MainTab';
import { useAppSelector } from '../../../redux/store';

type PropsType = NativeStackScreenProps<MainTabParamListType, 'Home'>;

const Home: React.FC<PropsType> = () => {
  const [pokemon, setPokemon] = useState<IPokemon>();
  const user = useAppSelector((state) => state.usersStore.currentUser);

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
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        Welcome <Text style={styles.userName}>{user?.name}</Text>!
      </Text>
      <View>
        <Text>{pokemon?.name}</Text>
        <Text>{pokemon?.height}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  userName: {
    fontWeight: 'bold',
  },
});

export default Home;
