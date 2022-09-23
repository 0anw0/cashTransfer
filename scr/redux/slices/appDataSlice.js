import {createSlice} from '@reduxjs/toolkit';
import {defineUUID, getActiveNumber, saveActiveNumber} from '../../util';

export const appDataSlice = createSlice({
  name: 'appData',
  initialState: {
    uuid: '',
    activeId: '',
    setting: {
      returnPersentage: 1,
      networkId:{
        code010: '*7*9*',
        code011: '*777*1*',
        code012: '',
        code015: '',
      }
    },
    currentDay: new Date(),
  },
  reducers: {
    setUuid: (state, action) => {
      if (state.uuid.length == 0) return {...state, uuid: defineUUID()};
    },
    updateReturnPersent: (state, action) => {
      return {
        ...state,
        setting: {...state.setting, returnPersentage: action.payload},
      };
    },
    updateCurrentDay: (state, action) => {
      return {
        ...state,
        currentDay:
          new Date(action.payload).toDateString() >
          new Date(state.currentDay).toDateString()
            ? action.payload
            : state.currentDay,
      };
    },
    setActiveNoId:(state, action) => {
      console.log("LOG ACTIVE ID: ", action.payload)
      return {
        ...state, 
        activeId: action.payload
      }
    },
    default: state => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUuid, updateReturnPersent, updateCurrentDay, setActiveNoId} =
  appDataSlice.actions;

export default appDataSlice.reducer;
