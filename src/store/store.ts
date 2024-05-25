import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './root.saga';
import mitarbeiterReducer from '../app/mitarbeiter/[id]/store/MitarbeiterSlice';
import mitarbeiterUebersichtReducer from '../app/mitarbeiter/store/MitarbeiterUebersichtSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    MITARBEITER_SLICE_NAME: mitarbeiterReducer,
    MITARBEITER_UEBERSICHT_SLICE_NAME: mitarbeiterUebersichtReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
  // devTools: process.env.NODE_ENV !== 'production',
  devTools: true,
});

sagaMiddleware.run(rootSaga);
//  other sagas

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
