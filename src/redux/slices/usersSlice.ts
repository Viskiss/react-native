import { createSlice } from '@reduxjs/toolkit';
import type { UserType } from '../../types';

const initialState = () => ({
  currentUser: null as UserType | null,
  users: [] as UserType[],
});

const usersSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.currentUser = payload;
    },
    registration: (state, { payload }) => {
      state.users.push(payload);
      state.currentUser = payload;
    },
  },
});

export const usersSliceActions = usersSlice.actions;

export default usersSlice.reducer;
