import { configureStore } from '@reduxjs/toolkit';
import { searchTextSlice } from '../features/searchTextSlice';
import { searchResultsSlice } from '../features/searchResultsSlice';
import { formValuesSlice } from '../features/formValuesSlice';
import { unsplashApi } from '../services/unsplashApi';

export const store = configureStore({
  reducer: {
    searchText: searchTextSlice.reducer,
    search: searchResultsSlice.reducer,
    form: formValuesSlice.reducer,
    [unsplashApi.reducerPath]: unsplashApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
