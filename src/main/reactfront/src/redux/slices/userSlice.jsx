import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HttpError from '../../service/httpError';

export const getList = createAsyncThunk('GET_USER', async ({ page, submitData }, thunkApi) => {
  try {
    const response = await (
      await axios.get('/userMemberList', {
        params: {
          page,
          address: submitData?.address,
          year: submitData?.year,
          month: submitData?.month,
          day: submitData?.day,
          gender: submitData?.gender,
          name: submitData?.name,
          phone1: submitData?.phone1,
          phone2: submitData?.phone2,
          phone3: submitData?.phone3,
          signDateStart: submitData?.signDateStart,
          signDateEnd: submitData?.signDateEnd,
          modifyDateStart: submitData?.modifyDateStart,
          modifyDateEnd: submitData?.modifyDateEnd,
          status: submitData?.status,
          email: submitData?.email,
          saveStatus: submitData?.saveStatus,
        },
      })
    ).data;
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
  page: 0,
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
