// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { chartReducer } from './chartSlice';
import { tableReducer } from './tableSlice';

export const store = configureStore({
  reducer: {
    chart: chartReducer,
    table: tableReducer
  }
});

// Infer the RootState type
export type RootState = ReturnType<typeof store.getState>;