import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import createSagaMiddleware from "@redux-saga/core";
import mitarbeiterReducer from "./mitarbeiter/MitarbeiterSlice";
import rootSaga from './root.saga';



const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mitarbeiter: mitarbeiterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  // middleware: (getDefaultMiddleware) => {
  //   // WARNING: this means that _none_ of the default middleware are added!
  //   return [sagaMiddleware]
  //   // or for TS users, use:
  //   // return new Tuple(myMiddleware)
  // },
})

// Added line
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch