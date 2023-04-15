import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import { FormValues } from '../components/Form/FormHook';

interface FormValuesState {
  formValues: FormValues[];
}

const initialState: FormValuesState = {
  formValues: [],
};

export const formValuesSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormValues: (state, action: PayloadAction<FormValues>) => {
      state.formValues.push(action.payload);
    },
  },
});

export const { setFormValues } = formValuesSlice.actions;

export const formValues = (state: RootState) => state.form.formValues;

export default formValuesSlice.reducer;
