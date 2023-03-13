import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { IPokemon } from 'pokeapi-typescript';

import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native';

import type { MainTabParamList } from 'src/navigation/components/MainTab';

import pokemonBack from 'src/ui/assets/Back.jpeg';
import Pokémon_logo from 'src/ui/assets/Pokémon_logo.svg';

import { styles } from './Home.styles';

type Props = NativeStackScreenProps<MainTabParamList, 'Home'>;

const Home: React.FC<Props> = () => {
  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    getRundomPokemon();
  }, []);

  const getRundomPokemon = async () => {
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
  };

  return (
    <View style={styles.container}>
      {!pokemon ? (
        <ActivityIndicator />
      ) : (
        <>
        <TouchableOpacity onPressOut={() => getRundomPokemon()}>
        <Pokémon_logo />
        </TouchableOpacity>
          <View style={styles.rundomPokemon}>
            <View>
              <Image style={styles.pokemonBackground} source={pokemonBack} />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: pokemon?.sprites.front_default,
                }}
              />
            </View>

            <Text style={styles.name}>{pokemon?.name.toLocaleUpperCase()}</Text>

            <Text style={styles.title}>Height: {pokemon?.height}</Text>

            <Text style={styles.title}>Weight: {pokemon?.weight}</Text>

            <Text style={styles.title}>
              Type: {pokemon?.types[0].type.name}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default Home;
