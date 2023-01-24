import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HttpError from '../../service/httpError';

export const getList = createAsyncThunk('GET_USER', async (arg, thunkApi) => {
  const { page, submitData } = arg;
  let response;
  try {
    if (submitData && submitData !== []) {
      response = await (await axios.post('/userMemberListForm', submitData)).data;
      console.log('slice', response);
      return response;
    }
    response = await (await axios.get(`/userMemberList?page=${page}`)).data;
    console.log(response);
    return response;
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
  submitData: undefined,
  loading: false,
  error: undefined,
  page: 1,
};

export const userSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    handlePage(state, action) {
      state.page = action.payload;
    },
    handleSubmit(state, action) {
      state.submitData = action.payload;
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
