import { PayloadActionCreator, createAction } from '@reduxjs/toolkit';

export type MitarbeiterStateType = {
  id?: string;
  name: string;
  // lastname: string;
  email: string;
  // active: boolean;
  // createdAt: Date;
  // updatedAt: Date;
};

export type LadeMitarbeiterStateType = {
  mitarbeiter: MitarbeiterStateType | null;
  isLoading: boolean;
  error: string | null;
};

export type GlobalMitarbeiterStateType = {
  ladeMitarbeiter: LadeMitarbeiterStateType;
};

// SLICES
export const MITARBEITER_SLICE_NAME = 'mitarbeiter';
export type MITARBEITER_SLICE = typeof MITARBEITER_SLICE_NAME;

// ACTIONS : GET_BY_ID
export const GET_MITARBEITER_BY_ID_REQUEST = `${MITARBEITER_SLICE_NAME}/getMitarbeiterById`;
export const getMitarbeiterByIdRequestAction: PayloadActionCreator<
  number,
  typeof GET_MITARBEITER_BY_ID_REQUEST
> = createAction(GET_MITARBEITER_BY_ID_REQUEST);

export const GET_MITARBEITER_BY_ID_SUCCESS = `${MITARBEITER_SLICE_NAME}/getMitarbeiterByIdSuccess`;
export const getMitarbeiterByIdSuccessAction: PayloadActionCreator<
  MitarbeiterStateType,
  typeof GET_MITARBEITER_BY_ID_SUCCESS
> = createAction(GET_MITARBEITER_BY_ID_SUCCESS);

export const GET_MITARBEITER_BY_ID_FAILURE = `${MITARBEITER_SLICE_NAME}/getMitarbeiterByIdFailure`;
export const getMitarbeiterByIdFailureAction: PayloadActionCreator<
  string,
  typeof GET_MITARBEITER_BY_ID_FAILURE
> = createAction(GET_MITARBEITER_BY_ID_FAILURE);

// ACTIONS : UPSERT
export const MITARBEITER_UPSERT_REQUEST = `${MITARBEITER_SLICE_NAME}/upsertMitarbeiterRequest`;
export const upsertMitarbeiterRequestAction: PayloadActionCreator<
  MitarbeiterStateType,
  typeof MITARBEITER_UPSERT_REQUEST
> = createAction(MITARBEITER_UPSERT_REQUEST);

export const MITARBEITER_UPSERT_SUCCESS = `${MITARBEITER_SLICE_NAME}/upsertMitarbeiterSuccess`;
export const upsertMitarbeiterSuccessAction: PayloadActionCreator<
  MitarbeiterStateType,
  typeof MITARBEITER_UPSERT_SUCCESS
> = createAction(MITARBEITER_UPSERT_SUCCESS);

export const MITARBEITER_UPSERT_FAILURE = `${MITARBEITER_SLICE_NAME}/upsertMitarbeiterFailure`;
export const upsertMitarbeiterFailureAction: PayloadActionCreator<
  string,
  typeof MITARBEITER_UPSERT_FAILURE
> = createAction(MITARBEITER_UPSERT_FAILURE);

// ACTIONS : DELETE
export const MITARBEITER_DELETE_REQUEST = `${MITARBEITER_SLICE_NAME}/deleteMitarbeiterRequest`;
export const deleteMitarbeiterRequestAction: PayloadActionCreator<
  number,
  typeof MITARBEITER_DELETE_REQUEST
> = createAction(MITARBEITER_DELETE_REQUEST);

export const MITARBEITER_DELETE_SUCCESS = `${MITARBEITER_SLICE_NAME}/deleteMitarbeiterSuccess`;
export const deleteMitarbeiterSuccessAction: PayloadActionCreator<
  Boolean,
  typeof MITARBEITER_DELETE_SUCCESS
> = createAction(MITARBEITER_DELETE_SUCCESS);

export const MITARBEITER_DELETE_FAILURE = `${MITARBEITER_SLICE_NAME}/deleteMitarbeiterFailure`;
export const deleteMitarbeiterFailureAction: PayloadActionCreator<
  string,
  typeof MITARBEITER_DELETE_FAILURE
> = createAction(MITARBEITER_DELETE_FAILURE);
