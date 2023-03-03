import { createSlice } from '@reduxjs/toolkit';

import type { PokeResponseType } from 'src/types';

const initialState = () => ({
  pokemon: [] as PokeResponseType[],
  selectEntyti: {},
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons: (state, { payload }) => {
      state.pokemon = payload;
    },
    getSelectPokemon: (state, { payload }) => {
      state.selectEntyti = payload;
    },
  },
});

export const pokemonSliceActions = pokemonSlice.actions;

export default pokemonSlice.reducer;
