import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/userReducer';

const reducer = combineReducers({ userReducer: userReducer.reducer });

const store = configureStore({
  reducer,
});

export default store;
