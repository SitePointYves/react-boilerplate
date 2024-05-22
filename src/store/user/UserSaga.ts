import { call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_USER_REQUEST,
  getUserFailureAction,
  getUserRequestAction,
  getUserSuccessAction,
} from './UserActions';
import userApiInstance from '@/api/user/userApi';

function* getUser(action: ReturnType<typeof getUserRequestAction>): Generator<any, void, any> {
  try {
    const user = yield call(userApiInstance.getUser, action.id);
    yield put(getUserSuccessAction(user));
  } catch (error) {
    console.error(error);
    yield put(getUserFailureAction('Fehler beim Laden des Benutzers'));
  }
}

export default function* watchGetUser() {
  yield takeEvery(GET_USER_REQUEST, getUser);
}
