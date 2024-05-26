import { call, put, takeLatest } from 'redux-saga/effects';

import mitarbeiterApiInstance from '../../api/mitarbeiterApi';
import {
  MitarbeiterStateType,
  deleteMitarbeiterFailureAction,
  deleteMitarbeiterRequestAction,
  deleteMitarbeiterSuccessAction,
  getMitarbeiterByIdFailureAction,
  getMitarbeiterByIdRequestAction,
  getMitarbeiterByIdSuccessAction,
  upsertMitarbeiterFailureAction,
  upsertMitarbeiterRequestAction,
  upsertMitarbeiterSuccessAction,
} from './MitarbeiterTypes';

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

function* upsertMitarbeiterSaga(
  action: ReturnType<typeof upsertMitarbeiterRequestAction>,
): Generator<any, any, any> {
  try {
    const mitarbeiter: MitarbeiterStateType = yield call(
      mitarbeiterApiInstance.upsertMitarbeiter,
      action.payload,
    );
    yield put(upsertMitarbeiterSuccessAction(mitarbeiter));
  } catch (error) {
    console.error(error);
    yield put(upsertMitarbeiterFailureAction('Fehler beim Update/Insert des Mitarbeiters'));
  }
}

function* deleteMitarbeiterSaga(
  action: ReturnType<typeof deleteMitarbeiterRequestAction>,
): Generator<any, any, any> {
  try {
    const deleted: Boolean = yield call(mitarbeiterApiInstance.deleteMitarbeiter, action.payload);
    yield put(deleteMitarbeiterSuccessAction(deleted));
  } catch (error) {
    console.error(error);
    yield put(deleteMitarbeiterFailureAction('Fehler beim Löschen des Mitarbeiters'));
  }
}

export function* watchMitarbeiter() {
  yield takeLatest(getMitarbeiterByIdRequestAction.type, getMitarbeiterByIdSaga);
  yield takeLatest(upsertMitarbeiterRequestAction.type, upsertMitarbeiterSaga);
  yield takeLatest(deleteMitarbeiterRequestAction.type, deleteMitarbeiterSaga);
}
