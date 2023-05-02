import { combineReducers } from '@reduxjs/toolkit';
import { usersSlice } from './usersSlice';

const rootReducer = combineReducers({
  [usersSlice.name]: usersSlice.reducer,
});

export default rootReducer;
