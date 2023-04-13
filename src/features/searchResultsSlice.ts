import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { DataCard } from '../pages/Home/Home';

interface SearchState {
  searchResults: DataCard[];
  searchError: string;
  isLoadingCards: boolean;
}

const initialState: SearchState = {
  searchResults: [],
  searchError: '',
  isLoadingCards: false,
};

export const searchResultsSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<DataCard[]>) => {
      state.searchResults = action.payload;
    },
    setSearchError: (state, action: PayloadAction<string>) => {
      state.searchError = action.payload;
    },
    setIsloadingCards: (state, action: PayloadAction<boolean>) => {
      state.isLoadingCards = action.payload;
    },
  },
});

export const { setSearchResults, setSearchError } = searchResultsSlice.actions;
