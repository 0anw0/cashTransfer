import {createSlice} from '@reduxjs/toolkit';

export const paymentSlice = createSlice({
  name: 'payment',
  initialState: {currentState: {}, processes: []},
  reducers: {
    addNewPayment: (state, action) => {
      console.log("action: ", action.payload)
      return {currentState: action.payload, processes: state.processes};
    },
    confirmNewPayment: (state) => {
      return {
        processes: [...state.processes, state.currentState],
        currentState: {},
      };
    },
    cancelNewPayment: state => {
      return {
        ...state,
        currentState: {},
      };
    },default: state => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addNewPayment, confirmNewPayment, cancelNewPayment} =
  paymentSlice.actions;

export default paymentSlice.reducer;
