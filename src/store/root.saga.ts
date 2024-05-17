import { all, fork } from "redux-saga/effects";
import { watchGetMitarbeiter } from "./mitarbeiter/MitarbeiterSaga";

const rootSaga = function* () {
  yield all([
    fork(watchGetMitarbeiter),
    // Other forks
    // fork(watchGetUsersList),
  ]);
};

export default rootSaga;