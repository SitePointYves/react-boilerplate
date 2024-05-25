import { PayloadActionCreator, createAction } from '@reduxjs/toolkit';
import { MitarbeiterStateType } from '../[id]/store/MitarbeiterTypes';

export type LadeMitarbeiterUebersichtStateType = {
  mitarbeiterUebersicht: MitarbeiterStateType[];
  isLoading: boolean;
  error: string | null;
};

export type GlobalMitarbeiterUebersichtStateType = {
  ladeMitarbeiterUebersicht: LadeMitarbeiterUebersichtStateType;
};

// SLICES
export const MITARBEITER_UEBERSICHT_SLICE_NAME = 'mitarbeiteruebersicht';
export type MITARBEITER_UEBERSICHT_SLICE = typeof MITARBEITER_UEBERSICHT_SLICE_NAME;

// ACTIONS
export const GET_MITARBEITER_UEBERSICHT_REQUEST = `${MITARBEITER_UEBERSICHT_SLICE_NAME}/getMitarbeiterUebersicht`;
export const getMitarbeiterUebersichtRequestAction: PayloadActionCreator<
  undefined,
  typeof GET_MITARBEITER_UEBERSICHT_REQUEST
> = createAction(GET_MITARBEITER_UEBERSICHT_REQUEST);

export const GET_MITARBEITER_UEBERSICHT_SUCCESS = `${MITARBEITER_UEBERSICHT_SLICE_NAME}/getMitarbeiterUebersichtSuccess`;
export const getMitarbeiterUebersichtSuccessAction: PayloadActionCreator<
  MitarbeiterStateType[],
  typeof GET_MITARBEITER_UEBERSICHT_SUCCESS
> = createAction(GET_MITARBEITER_UEBERSICHT_SUCCESS);

export const GET_MITARBEITER_UEBERSICHT_FAILURE = `${MITARBEITER_UEBERSICHT_SLICE_NAME}/getMitarbeiterUebersichtFailure`;
export const getMitarbeiterUebersichtFailureAction: PayloadActionCreator<
  string,
  typeof GET_MITARBEITER_UEBERSICHT_FAILURE
> = createAction(GET_MITARBEITER_UEBERSICHT_FAILURE);
