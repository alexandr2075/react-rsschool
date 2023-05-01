import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

interface SearchTextState {
  searchText: string;
}

const initialState: SearchTextState = {
  searchText: '',
};

export const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { setSearchText } = searchTextSlice.actions;

export const searchText = (state: RootState) => state.searchText.searchText;

export default searchTextSlice.reducer;
