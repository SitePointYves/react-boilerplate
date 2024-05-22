import { Action } from '@reduxjs/toolkit';
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from './UserActions';

export const USER_SLICE_NAME = 'user';

export interface UserStateType {
  loading: boolean;
  user: User | null;
  error: string | null;
}

export interface GetUserRequestAction extends Action {
  type: typeof GET_USER_REQUEST;
  id: number;
}

export interface GetUserSuccessAction extends Action {
  type: typeof GET_USER_SUCCESS;
  user: User;
}

export interface GetUserFailureAction extends Action {
  type: typeof GET_USER_FAILURE;
  error: string;
}

export type UserActionTypes = GetUserRequestAction | GetUserSuccessAction | GetUserFailureAction;
