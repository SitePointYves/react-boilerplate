import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MITARBEITER, MitarbeiterStateType, MitarbeiterType } from "./MitarbeiterType";


const mitarbeiterInitialState: MitarbeiterStateType = {
  mitarbeiter: {
    data: null,
    isLoading: false,
    errors: '',
  }
}

export const mitarbeiterSlice = createSlice({
  name: MITARBEITER,
  initialState: mitarbeiterInitialState,
  reducers: {
    /* This action will trigger our saga middleware
       and set the loader to true and reset error message.
    */
    getMitarbeiterAction: (state: MitarbeiterStateType, { payload: id }: PayloadAction<string>) => {
      state.mitarbeiter.isLoading = true;
      state.mitarbeiter.errors = '';
    },
    getMitarbeiterSuccessAction: (state: MitarbeiterStateType, { payload: mitarbeiter }: PayloadAction<MitarbeiterType>) => {
      state.mitarbeiter.isLoading = false;
      state.mitarbeiter.data = mitarbeiter;
    },
    getMitarbeiterErrorAction: (state: MitarbeiterStateType, { payload: error }: PayloadAction<string>) => {
      state.mitarbeiter.isLoading = false;
      state.mitarbeiter.errors = error;
    },
  }
});


export const { getMitarbeiterAction, getMitarbeiterSuccessAction, getMitarbeiterErrorAction } = mitarbeiterSlice.actions
export default mitarbeiterSlice.reducer;