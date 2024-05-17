import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import { GET_MITARBEITER_BY_ID, MitarbeiterType } from "./MitarbeiterType";
import { getMitarbeiterErrorAction, getMitarbeiterSuccessAction } from "./MitarbeiterSlice";


// Generator function
function* getMitarbeiterSaga({ payload: id }: PayloadAction<string>) {
  try {
    // You can also export the axios call as a function.
    const response: MitarbeiterType = {
        id: '1',
        name: 'a',
        lastname: 'b',
        email: 'c',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    yield put(getMitarbeiterSuccessAction(response));
  } catch (error) {
    yield put(getMitarbeiterErrorAction("Fehler beim Laden des Mitarbeiters"));
  }
}

// Generator function
export function* watchGetMitarbeiter() {
  yield takeLatest(GET_MITARBEITER_BY_ID, getMitarbeiterSaga);
}