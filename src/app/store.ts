import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import todos from './slices/todoSlice'

import { todosApi } from "./api/todosApi";

export const store = configureStore({
  reducer: {
    // todos,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
