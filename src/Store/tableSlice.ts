import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [
        { id: 1, name: "Emma Johnson", age: 28, city: "New York" },
        { id: 2, name: "Liam Smith", age: 34, city: "Los Angeles" },
        { id: 3, name: "Olivia Williams", age: 22, city: "Chicago" },
        { id: 4, name: "Noah Brown", age: 45, city: "Houston" },
        { id: 5, name: "Ava Jones", age: 31, city: "Phoenix" },
        { id: 6, name: "William Garcia", age: 29, city: "Philadelphia" },
        { id: 7, name: "Sophia Miller", age: 26, city: "San Antonio" },
        { id: 8, name: "Benjamin Davis", age: 38, city: "San Diego" },
        { id: 9, name: "Isabella Rodriguez", age: 41, city: "Dallas" },
        { id: 10, name: "Mason Martinez", age: 33, city: "San Jose" },
        { id: 11, name: "Mia Hernandez", age: 27, city: "Austin" },
        { id: 12, name: "James Lopez", age: 30, city: "Jacksonville" },
        { id: 13, name: "Charlotte Gonzalez", age: 35, city: "Fort Worth" },
        { id: 14, name: "Elijah Wilson", age: 24, city: "Columbus" },
        { id: 15, name: "Amelia Anderson", age: 39, city: "San Francisco" }
      ]
};

export const tableSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {} 
});

export const tableReducer = tableSlice.reducer
