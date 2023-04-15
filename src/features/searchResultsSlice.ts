import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { DataCard } from '../pages/Home/Home';

interface SearchState {
  searchResults: DataCard[];
  searchError: string;
  isLoadingCards: boolean;
  currentPage: number;
  totalPages: number;
}

const initialState: SearchState = {
  searchResults: [],
  searchError: '',
  isLoadingCards: false,
  currentPage: 0,
  totalPages: 0,
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
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setSearchResults, setSearchError, setCurrentPage, setTotalPages } =
  searchResultsSlice.actions;
