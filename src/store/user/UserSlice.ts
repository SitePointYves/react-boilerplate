import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_SLICE_NAME, UserStateType } from './UserTypes';

const userInitialState: UserStateType = {
  loading: false,
  user: null,
  error: null,
};

export const usersSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState: userInitialState,
  reducers: {
    getUserStart: state => {
      state.loading = true;
      state.error = null;
    },
    getUserSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    },
    getUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
