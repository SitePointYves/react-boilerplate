import { watchGetMitarbeiterUebersicht } from '@/app/mitarbeiter/store/MitarbeiterSaga';
import { all, fork } from 'redux-saga/effects';
import { watchMitarbeiter } from '../app/mitarbeiter/[id]/store/MitarbeiterSaga';

const rootSaga = function* () {
  yield all([fork(watchMitarbeiter), fork(watchGetMitarbeiterUebersicht)]);
};

export default rootSaga;
