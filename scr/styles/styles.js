import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';

import {screenWidth, screenHeight, colorSchema} from '../config/index';
const {
  MainBackground,
  MainTxt,
  MainBtn,
  SecTxt,
  MainBtnTint,
  SecBtn,
  SecBtnTint,
} = colorSchema;

const resScrSty = StyleSheet.create({
  recentIcon: {
    height: screenHeight * 0.075,
    width: screenHeight * 0.075,
    backgroundColor: MainBtn,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
  },
  icon:{
    color:'white'
  }
});


export {resScrSty};
