import {createSlice} from '@reduxjs/toolkit';

export const statsSlice = createSlice({
  name: 'stats',
  initialState: [],
  reducers: {
    addNewDailyStats: (state, action) => {
      return [...state, action.payload]
    },
    
  },
});

// Action creators are generated for each case reducer function
export const {addNewDailyStats} =
statsSlice.actions;

export default statsSlice.reducer;