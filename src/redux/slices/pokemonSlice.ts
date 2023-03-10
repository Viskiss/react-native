import { createSlice } from '@reduxjs/toolkit';

import type { PokeResponse } from 'src/types/pokemon';

const initialState = () => ({
  pokemons: [] as PokeResponse[],
  selectPokemon: {},
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons: (state, { payload }) => {
      state.pokemons = [...state.pokemons, ...payload];
    },
    refreshPokemonList: (state, { payload }) => {
      if (payload) {
        state.pokemons = [];
      }
    },
  },
});

export const pokemonSliceActions = pokemonSlice.actions;

export default pokemonSlice.reducer;
