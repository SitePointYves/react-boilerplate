import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  LadeMitarbeiterUebersichtStateType,
  MITARBEITER_UEBERSICHT_SLICE_NAME,
  getMitarbeiterUebersichtFailureAction,
  getMitarbeiterUebersichtRequestAction,
  getMitarbeiterUebersichtSuccessAction,
} from './MitarbeiterUebersichtTypes';
import { MitarbeiterStateType } from '../[id]/store/MitarbeiterTypes';

const ladeMitarbeiterInitialState: LadeMitarbeiterUebersichtStateType = {
  mitarbeiterUebersicht: [],
  isLoading: false,
  error: null,
};

export const mitarbeiterUebersichtSlice = createSlice({
  name: MITARBEITER_UEBERSICHT_SLICE_NAME,
  initialState: ladeMitarbeiterInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // lade Mitarberiter by id actions
      .addCase(getMitarbeiterUebersichtRequestAction, (state, action: PayloadAction<undefined>) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getMitarbeiterUebersichtSuccessAction,
        (state, action: PayloadAction<MitarbeiterStateType[]>) => {
          state.isLoading = false;
          state.mitarbeiterUebersicht = action.payload;
          state.error = null;
        },
      )
      .addCase(getMitarbeiterUebersichtFailureAction, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default mitarbeiterUebersichtSlice.reducer;
