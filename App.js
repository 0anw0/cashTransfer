import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './scr/redux/store';
import {
  Home,
  AddNewNumber,
  FirstStepScr,
  SecStepScr,
  LimitUpdate,
  Reports,
  Result,
  Search,
  Settings,
  OnSubmit,
  AllPayments,
  DeleteNumber,
} from './scr/screens/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false, animationEnabled: false}}
            />
            <Stack.Screen
              name="AddNewNumber"
              component={AddNewNumber}
              options={{headerShown: false, animationEnabled: false}}
            />
            <Stack.Screen
              name="FirstStepScr"
              component={FirstStepScr}
              options={{headerShown: false, animationEnabled: false}}
            />
            <Stack.Screen
              name="SecStepScr"
              component={SecStepScr}
              options={{headerShown: false, animationEnabled: false}}
            />
            <Stack.Screen
              name="LimitUpdate"
              component={LimitUpdate}
              options={{headerShown: false, animationEnabled: false}}
            />
            <Stack.Screen
              name="Reports"
              component={Reports}
              options={{headerShown: false, animationEnabled: false}}
            />
            <Stack.Screen
              name="Result"
              component={Result}
              options={{headerShown: false, animationEnabled: false}}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{headerShown: false, animationEnabled: false}}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{headerShown: false, animationEnabled: false}}
            />
            <Stack.Screen
              name="OnSubmit"
              component={OnSubmit}
              options={{headerShown: false, animationEnabled: false}}
            />
            <Stack.Screen
              name="AllPayments"
              component={AllPayments}
              options={{headerShown: false, animationEnabled: false}}
            />
            <Stack.Screen
              name="DeleteNo"
              component={DeleteNumber}
              options={{headerShown: false, animationEnabled: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
