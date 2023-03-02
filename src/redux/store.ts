import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import userReduser from './slices/usersSlice';
import entityReduser from './slices/entitySlice';

const store = configureStore({
  reducer: {
    usersStore: userReduser,
    entityStore: entityReduser,
  },
});

type AppDispatchType = typeof store.dispatch;
export type StateType = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
export const useAppDispatch: () => AppDispatchType = useDispatch;

export default store;
