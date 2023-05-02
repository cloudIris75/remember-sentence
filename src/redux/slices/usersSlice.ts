import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  isLoggedIn: boolean;
  token: string;
  userId: string;
  username: string;
}

interface Login_Actions {
  payload: {
    isLoggedIn: boolean;
    token: string;
    userId: string;
    username: string;
  };
}

const initialState: UserState = {
  isLoggedIn: false,
  token: '',
  userId: '',
  username: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, action: Login_Actions) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = '';
      state.userId = '';
      state.username = '';
    },
  },
});

export const { login, logout } = usersSlice.actions;

export default usersSlice.reducer;
