import { GetUserFailureAction, GetUserRequestAction, GetUserSuccessAction } from './UserTypes';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const getUserRequestAction = (id: number): GetUserRequestAction => ({
  type: GET_USER_REQUEST,
  id,
});
export const getUserSuccessAction = (user: User): GetUserSuccessAction => ({
  type: GET_USER_SUCCESS,
  user,
});
export const getUserFailureAction = (error: string): GetUserFailureAction => ({
  type: GET_USER_FAILURE,
  error,
});
