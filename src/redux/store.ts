import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import userReduser from './slices/userSlice';
import pokemonReduser from './slices/pokemonSlice';

const store = configureStore({
  reducer: {
    userStore: userReduser,
    pokemonStore: pokemonReduser,
  },
});

type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
