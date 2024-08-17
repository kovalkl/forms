import { configureStore } from '@reduxjs/toolkit';

import countriesReducer from '@/store/countriesSlice';
import formsReducer from '@/store/formsSlice';

const store = configureStore({
  reducer: {
    forms: formsReducer,
    countries: countriesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
