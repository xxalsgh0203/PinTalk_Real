import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HttpError from '../../service/httpError';

export const getList = createAsyncThunk('GET_USER', async (arg, thunkApi) => {
  try {
    const response = await axios.get(
      `/userMemberList?page=${arg.page}${arg.status ? `&status=${arg.status}` : ''}`,
    );
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
  page: 1,
  status: null,
};

export const userReducer = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    handlePage(state, action) {
      state.page = action.payload;
    },
    handleStatus(state, action) {
      state.status = action.payload;
    },
  },
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
