import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getList = createAsyncThunk('GET_USER', async () => {
  const response = await axios.get('/erpMemberList');
  return response.data;
});

export const userReducer = createSlice({
  name: 'userList',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getList.fulfilled]: (state, { payload }) => [...payload],
  },
});
