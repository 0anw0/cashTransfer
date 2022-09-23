import { createSlice } from '@reduxjs/toolkit'


export const feqUsedNoSlice = createSlice({
  name: 'freqUsedNo',          
  initialState: [],
  reducers: {
    addNewNumber: (state, number) => {
      //Save New Used Numbers
      state.push(number) 
    },
  }
})

// Action creators are generated for each case reducer function
export const { addNewNumber } = feqUsedNoSlice.actions

export default feqUsedNoSlice.reducer