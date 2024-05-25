import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getMitarbeiterUebersichtFailureAction,
  getMitarbeiterUebersichtRequestAction,
  getMitarbeiterUebersichtSuccessAction,
} from './MitarbeiterUebersichtTypes';
import { MitarbeiterStateType } from '../[id]/store/MitarbeiterTypes';
import mitarbeiterApiInstance from '../api/mitarbeiterApi';

function* getMitarbeiterUebersichtSaga(
  action: ReturnType<typeof getMitarbeiterUebersichtRequestAction>,
): Generator<any, any, any> {
  try {
    const mitarbeiterUebersicht: MitarbeiterStateType[] = yield call(
      mitarbeiterApiInstance.getMitarbeiterUebersicht,
    );
    yield put(getMitarbeiterUebersichtSuccessAction(mitarbeiterUebersicht));
  } catch (error) {
    console.error(error);
    yield put(
      getMitarbeiterUebersichtFailureAction('Fehler beim Laden der Mitarbeiter Uebersicht'),
    );
  }
}

export function* watchGetMitarbeiterUebersicht() {
  yield takeLatest(getMitarbeiterUebersichtRequestAction.type, getMitarbeiterUebersichtSaga);
}
