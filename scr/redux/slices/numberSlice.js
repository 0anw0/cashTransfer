import {createSlice} from '@reduxjs/toolkit';

export const numberSlice = createSlice({
  name: 'number',
  initialState: [],
  reducers: {
    addNewNumber: (state, action) => {
      //console.log('State: ', state);
      let newState = [...state, action.payload];

      //setUserNumbers(newState);
      return newState;
    },
    editANumber: (state, action) => {
      let element = action.payload;
      let newState = state.map(item => {
        if (item.id == action.payload.id) return element;
        else return item;
      });

      return newState;
    },
    updateLimit: (state, action) => {
      //console.log('State: ', state);
      let element = action.payload;
      let newState = state.map(item => {
        if (item.phoneNo == element.phoneNo) {
          let consume = Number(item.consume) + Number(element.consume);
          return {
            ...item,
            consume: consume,
          };
        } else return item;
      });

      return newState;
    },
    renewalConsumption: (state, action) => {
      let renewalDate,
        timediff,
        currentTime = new Date();
      const dailyInterval = 864e5;
      const weeklyInterval = 6048e5;
      const monthlyInterval = 2592e6;
      //console.log(state)

      //let element = action.payload;
      const newState = state.map(item => {
        renewalDate = new Date(item.renewalDate);
        timediff = currentTime - renewalDate;

        if (
          (item.renewalPeriod == 1 && timediff > dailyInterval) ||
          (item.renewalPeriod == 2 && timediff > weeklyInterval) ||
          (item.renewalPeriod == 3 && timediff > monthlyInterval)
        )
          return {...item, consume: 0};
        else return item;
      });
      //console.log('state: ', newState);
      return newState;
    },
    deleteNumber: (state, action) => {
      return state.filter(item => item.id != action.payload);
    },
    default: state => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewNumber,
  addInitState,
  editANumber,
  updateLimit,
  renewalConsumption,
  deleteNumber,
} = numberSlice.actions;

export default numberSlice.reducer;
