import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { IPokemon } from 'pokeapi-typescript';

import { Text, View } from 'react-native';

import type { MainTabParamListType } from 'src/navigation/components/MainTab';
import { useAppSelector } from 'src/redux/store';

import { styles } from './Home.styles';

type PropsType = NativeStackScreenProps<MainTabParamListType, 'Home'>;

const Home: React.FC<PropsType> = () => {
  const [pokemon, setPokemon] = useState<IPokemon>();
  const user = useAppSelector((state) => state.userStore.currentUser);

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

export default Home;
