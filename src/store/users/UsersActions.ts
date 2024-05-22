import { GetUsersFailureAction, GetUsersRequestAction, GetUsersSuccessAction } from './UsersTypes';

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const getUsersRequestAction = (): GetUsersRequestAction => ({
  type: GET_USERS_REQUEST,
});
export const getUsersSuccessAction = (users: User[]): GetUsersSuccessAction => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});
export const getUsersFailureAction = (error: string): GetUsersFailureAction => ({
  type: GET_USERS_FAILURE,
  payload: error,
});
