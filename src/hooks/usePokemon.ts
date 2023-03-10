import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { pokemonSliceActions } from 'src/redux/slices/pokemonSlice';

import type { PokeResponse } from 'src/types/pokemon';

export const usePokemon = () => {
  const dispatch = useAppDispatch();

  const setPokemons = (pokemons: PokeResponse[]) => {
    dispatch(pokemonSliceActions.setPokemons(pokemons));
  };

  const reloadPokemonList = (payload: string | number) => {
    dispatch(pokemonSliceActions.refreshPokemonList(payload));
  };

  const pokemons = useAppSelector((state) => state.pokemonStore.pokemons);

  return {
    setPokemons,
    reloadPokemonList,
    pokemons,
  };
};
