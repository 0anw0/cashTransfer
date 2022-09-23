import React from 'react';
import {View, Text} from 'react-native';

import {divider} from '../styles/index';

import {colorSchema} from '../config';

const {MainBtn} = colorSchema;
function OrDivider() {
  return (
    <View style={[divider.dividerContainer]}>
      <View style={divider.orDivider}></View>
      <Text style={divider.OR_Text}>OR</Text>
      <View style={divider.orDivider}></View>
    </View>
  );
}
function Divider() {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: MainBtn,
        width: 300,
      }}></View>
  );
}

export {OrDivider, Divider};
