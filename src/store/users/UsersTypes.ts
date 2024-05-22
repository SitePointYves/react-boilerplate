import { Action } from '@reduxjs/toolkit';
import { GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS } from './UsersActions';

export const USERS_SLICE_NAME = 'users';

export interface UsersStateType {
  loading: boolean;
  users: User[];
  error: string | null;
}

export interface GetUsersRequestAction extends Action {
  type: typeof GET_USERS_REQUEST;
}

export interface GetUsersSuccessAction extends Action {
  type: typeof GET_USERS_SUCCESS;
  payload: User[];
}

export interface GetUsersFailureAction extends Action {
  type: typeof GET_USERS_FAILURE;
  payload: string;
}

export type UserActionTypes = GetUsersRequestAction | GetUsersSuccessAction | GetUsersFailureAction;
