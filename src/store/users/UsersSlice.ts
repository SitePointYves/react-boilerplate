import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USERS_SLICE_NAME, UsersStateType } from './UsersTypes';
import { getUsersFailureAction, getUsersSuccessAction } from './UsersActions';

const usersInitialState: UsersStateType = {
  loading: false,
  users: [],
  error: null,
};

export const usersSlice = createSlice({
  name: USERS_SLICE_NAME,
  initialState: usersInitialState,
  reducers: {
    UserActionTypesgetUsersRequestAction: state => {
      state.loading = true;
      state.error = null;
    },
    getUsersSuccessAction: (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.users = action.payload;
    },
    getUsersFailureAction: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
