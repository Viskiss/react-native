import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SelectPokemon from 'src/ui/screens/root/ListPokemons/components/SelectPokemon/SelectPokemon';
import ListPokemons from 'src/ui/screens/root/ListPokemons/ListPokemons';

export type PokemonStackParamList = {
  ListPokemons: undefined;
  SelectPokemon: undefined | {url: string};
};

const Stack = createNativeStackNavigator<PokemonStackParamList>();

const PokemonListStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ListPokemons">
      <Stack.Screen name="ListPokemons" component={ListPokemons} />
      <Stack.Screen name="SelectPokemon" component={SelectPokemon} />
    </Stack.Navigator>
  );
};

export default PokemonListStack;
