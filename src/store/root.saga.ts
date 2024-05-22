import { all, fork } from 'redux-saga/effects';
import { watchGetMitarbeiter } from './mitarbeiter/MitarbeiterSaga';
import watchGetUser from './user/UserSaga';
import watchGetUsers from './users/UsersSaga';

const rootSaga = function* () {
  yield all([fork(watchGetMitarbeiter), fork(watchGetUser), fork(watchGetUsers)]);
};

export default rootSaga;
