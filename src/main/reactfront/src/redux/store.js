import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice';

const reducer = combineReducers({ userSlice: userSlice.reducer });

const store = configureStore({
  reducer,
});

export default store;
