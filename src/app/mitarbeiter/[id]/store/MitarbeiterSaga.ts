import { call, put, takeLatest } from 'redux-saga/effects';

import {
  MitarbeiterStateType,
  getMitarbeiterByIdFailureAction,
  getMitarbeiterByIdRequestAction,
  getMitarbeiterByIdSuccessAction,
} from './MitarbeiterTypes';
import mitarbeiterApiInstance from '../../api/mitarbeiterApi';

function* getMitarbeiterByIdSaga(
  action: ReturnType<typeof getMitarbeiterByIdRequestAction>,
): Generator<any, any, any> {
  try {
    const mitarbeiter: MitarbeiterStateType = yield call(
      mitarbeiterApiInstance.getMitarbeiterById,
      action.payload,
    );
    yield put(getMitarbeiterByIdSuccessAction(mitarbeiter));
  } catch (error) {
    console.error(error);
    yield put(getMitarbeiterByIdFailureAction('Fehler beim Laden des Mitarbeiters'));
  }
}

export function* watchGetMitarbeiter() {
  yield takeLatest(getMitarbeiterByIdRequestAction.type, getMitarbeiterByIdSaga);
}
