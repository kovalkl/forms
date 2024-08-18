import { createSlice } from '@reduxjs/toolkit';

import { countries } from '@/utils/countries';

type CountriesState = {
  list: string[];
};

const initialState: CountriesState = {
  list: countries,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;
