import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { FormDataType } from '@/models/types';

type FormState = {
  list: FormDataType[];
};

const initialState: FormState = {
  list: [],
};

const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addForm(state, action: PayloadAction<FormDataType>) {
      state.list.push(action.payload);
    },
  },
});

export const { addForm } = formsSlice.actions;
export default formsSlice.reducer;
