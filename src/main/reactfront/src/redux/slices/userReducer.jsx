import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HttpError from '../../service/httpError';

export const getList = createAsyncThunk('GET_USER', async (_, thunkApi) => {
  try {
    const response = await axios.get(`/erpMemberList`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = thunkApi.rejectWithValue(error.response.data).payload.error;
      const statusCode = thunkApi.rejectWithValue(error.response.data).payload.status;
      throw new HttpError(statusCode, errorMessage).errorMessage;
    } else {
      console.error('Unknown Error');
    }
  }
});

const initialState = {
  payload: [],
  loading: false,
  error: undefined,
};

export const userReducer = createSlice({
  name: 'userList',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = [...action.payload];
    });
    builder.addCase(getList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
