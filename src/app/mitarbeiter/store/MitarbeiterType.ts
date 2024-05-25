import { Action, PayloadAction, PayloadActionCreator, createAction } from '@reduxjs/toolkit';

export type MitarbeiterStateType = {
  id: string;
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
  error: string;
};

export type GlobalMitarbeiterStateType = {
  ladeMitarbeiter: LadeMitarbeiterStateType;
};

// SLICE
export const MITARBEITER_SLICE_NAME = 'mitarbeiter';
export type MITARBEITER_SLICE = typeof MITARBEITER_SLICE_NAME;

// ACTIONS
export const GET_MITARBEITER_BY_ID_REQUEST = `${MITARBEITER_SLICE_NAME}/getMitarbeiterById`;
export const getMitarbeiterByIdRequestAction: PayloadActionCreator<
  number,
  typeof GET_MITARBEITER_BY_ID_REQUEST
> = createAction(GET_MITARBEITER_BY_ID_REQUEST);

export const GET_MITARBEITER_BY_ID_FAILURE = `${MITARBEITER_SLICE_NAME}/getMitarbeiterByIdFailure`;
export const getMitarbeiterByIdFailureAction: PayloadActionCreator<
  string,
  typeof GET_MITARBEITER_BY_ID_FAILURE
> = createAction(GET_MITARBEITER_BY_ID_FAILURE);

export const GET_MITARBEITER_BY_ID_SUCCESS = `${MITARBEITER_SLICE_NAME}/getMitarbeiterByIdSuccess`;
export const getMitarbeiterByIdSuccessAction: PayloadActionCreator<
  MitarbeiterStateType,
  typeof GET_MITARBEITER_BY_ID_SUCCESS
> = createAction(GET_MITARBEITER_BY_ID_SUCCESS);

// TODO: update, insert, delete
