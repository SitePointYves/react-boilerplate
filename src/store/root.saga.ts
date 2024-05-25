import { all, fork } from 'redux-saga/effects';
import { watchGetMitarbeiter } from '../app/mitarbeiter/[id]/store/MitarbeiterSaga';
import { watchGetMitarbeiterUebersicht } from '@/app/mitarbeiter/store/MitarbeiterSaga';

const rootSaga = function* () {
  yield all([fork(watchGetMitarbeiter), fork(watchGetMitarbeiterUebersicht)]);
};

export default rootSaga;
