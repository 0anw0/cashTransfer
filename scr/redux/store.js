import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import appDataReducer from './slices/appDataSlice';
import numberReducer from './slices/numberSlice';
import paymentReducer from './slices/paymentSlice';
import statsSlice from './slices/statsSlice';

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['appData', 'payment', 'number','stats'],
};

/*
const numberConfig = {
  key: 'number',
  storage: AsyncStorage,
  whitelist: ['number'],
};

const paymentConfig = {
  key: 'payment',
  storage: AsyncStorage,
  whitelist: ['payment'],
};
*/

/*
const persistedAppDataReducer = persistReducer(appDataConfig, appDataReducer);
const persistedNumberReducer = persistReducer(numberConfig, numberReducer);
const persistedPaymentReducer = persistReducer(paymentConfig, paymentReducer);
*/

const rootReducer = combineReducers({
  appData: appDataReducer,
  number: numberReducer,
  payment: paymentReducer,
  stats:statsSlice
});

const persistedReducer = persistReducer(config, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export {store, persistor};
