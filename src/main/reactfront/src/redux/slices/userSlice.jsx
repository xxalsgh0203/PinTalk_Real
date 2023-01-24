import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HttpError from '../../service/httpError';

export const getList = createAsyncThunk('GET_USER', async ({ page, submitData }, thunkApi) => {
  let response;
  try {
    if (submitData) {
      const {
        address,
        year,
        month,
        day,
        gender,
        name,
        phone1,
        phone2,
        phone3,
        signDateStart,
        signDateEnd,
        modifyDateStart,
        modifyDateEnd,
        user_state,
        email,
      } = submitData;
      response = await (
        await axios.get('/userMemberListForm', {
          params: {
            page,
            address,
            year,
            month,
            day,
            gender,
            name,
            phone1,
            phone2,
            phone3,
            signDateStart,
            signDateEnd,
            modifyDateStart,
            modifyDateEnd,
            user_state,
            email,
          },
        })
      ).data;
      return response;
    }
    response = await (await axios.get(`/userMemberList?page=${page}`)).data;
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
