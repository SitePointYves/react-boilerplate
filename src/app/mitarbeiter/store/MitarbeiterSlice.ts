import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  LadeMitarbeiterStateType,
  MITARBEITER_SLICE_NAME,
  MitarbeiterStateType,
  getMitarbeiterByIdFailureAction,
  getMitarbeiterByIdRequestAction,
  getMitarbeiterByIdSuccessAction,
} from './MitarbeiterType';

const ladeMitarbeiterInitialState: LadeMitarbeiterStateType = {
  mitarbeiter: null,
  isLoading: false,
  error: null,
};

export const mitarbeiterSlice = createSlice({
  name: MITARBEITER_SLICE_NAME,
  initialState: ladeMitarbeiterInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMitarbeiterByIdRequestAction, (state, action: PayloadAction<number>) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getMitarbeiterByIdSuccessAction,
        (state, action: PayloadAction<MitarbeiterStateType>) => {
          state.isLoading = false;
          state.mitarbeiter = action.payload;
          state.error = null;
        },
      )
      .addCase(getMitarbeiterByIdFailureAction, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default mitarbeiterSlice.reducer;
