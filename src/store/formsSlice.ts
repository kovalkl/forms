import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { FormDataWithBase64 } from '@/models/types';

type FormState = {
  list: FormDataWithBase64[];
};

const initialState: FormState = {
  list: [],
};

const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addForm(state, action: PayloadAction<FormDataWithBase64>) {
      state.list.push(action.payload);
    },
  },
});

export const { addForm } = formsSlice.actions;
export default formsSlice.reducer;
