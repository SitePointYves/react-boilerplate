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

// ACTIONS
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

// TODO: update, insert, delete
