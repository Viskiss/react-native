import { createSlice } from '@reduxjs/toolkit';

import type { User } from 'src/types/user';

const initialState = () => ({
  currentUser: null as User | null,
  theme: 'light',
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    removeUser: (state, { payload }) => {
      if (payload) {
        state.currentUser = null;
      }
    },
    addUserAvatar: (state, { payload }) => {
      if (state.currentUser) {
        state.currentUser.avatar = payload;
      }
    },
    changeTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
