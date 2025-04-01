// store/chartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    { name: "Jan", ThisYear: 275, LastYear: 41 },
    { name: "Feb", ThisYear: 620, LastYear: 96 },
    { name: "Mar", ThisYear: 202, LastYear: 192 },
    { name: "Apr", ThisYear: 500, LastYear: 50 },
    { name: "May", ThisYear: 355, LastYear: 400 },
    { name: "Jun", ThisYear: 875, LastYear: 200 },
    { name: "Jul", ThisYear: 700, LastYear: 205 },
  ]
};

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {} 
});

export const chartReducer = chartSlice.reducer
