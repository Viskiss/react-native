import { createSlice } from '@reduxjs/toolkit';

import type { User } from 'src/types/user';

const initialState = () => ({
  currentUser: null as User | null,
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    exitUser: (state, { payload }) => {
      if (payload) {
        state.currentUser = null;
      }
    },
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
