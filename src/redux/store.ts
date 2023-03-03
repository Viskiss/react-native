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

type AppDispatchType = typeof store.dispatch;
export type StateType = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
export const useAppDispatch: () => AppDispatchType = useDispatch;

export default store;
