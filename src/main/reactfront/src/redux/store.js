import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { userReducer } from './slices/userReducer';
import logger from 'redux-logger';

const reducer = combineReducers({ userReducer: userReducer.reducer });

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});

export default store;
