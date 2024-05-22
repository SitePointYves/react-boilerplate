import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USERS_SLICE_NAME, UsersStateType } from './UsersTypes';

const usersInitialState: UsersStateType = {
  loading: false,
  users: [],
  error: null,
};

export const usersSlice = createSlice({
  name: USERS_SLICE_NAME,
  initialState: usersInitialState,
  reducers: {
    getUsersRequest: state => {
      state.loading = true;
      state.error = null;
    },
    getUsersSuccess: (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.users = action.payload;
    },
    getUsersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getUsersRequest, getUsersSuccess, getUsersFailure } = usersSlice.actions;
export default usersSlice.reducer;
