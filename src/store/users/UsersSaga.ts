import { call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_USERS_REQUEST,
  getUsersFailureAction,
  getUsersRequestAction,
  getUsersSuccessAction,
} from './UsersActions';
import userApiInstance from '@/api/user/userApi';

function* getUsers(action: ReturnType<typeof getUsersRequestAction>): Generator<any, void, any> {
  try {
    const users = yield call(userApiInstance.getUsers);
    
    yield put(getUsersSuccessAction(users));
  } catch (error) {
    console.error(error);
    yield put(getUsersFailureAction('Fehler beim Laden der Benutzer'));
  }
}

export default function* watchGetUsers() {
  yield takeEvery(GET_USERS_REQUEST, getUsers);
}
