import { createSlice } from '@reduxjs/toolkit';

import type { PokeResponseType } from '../../types';

const initialState = () => ({
  entiti: [] as PokeResponseType[],
  selectEntyti: {},
});

const entitiSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    upload: (state, { payload }) => {
      state.entiti = payload;
    },
    select: (state, { payload }) => {
      state.selectEntyti = payload;
    },
  },
});

export const entitiSliceActions = entitiSlice.actions;

export default entitiSlice.reducer;
