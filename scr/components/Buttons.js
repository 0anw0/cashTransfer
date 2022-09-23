import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import {
  ButtonComponent,
  linearGradientColors,
  linearGradientColorsOutline,
} from '../styles/index';

function Button(props) {
  return (
      <TouchableOpacity
        onPress={props.onPress}
        style={ButtonComponent.container}>
        <Text style={ButtonComponent.title}>{props.title}</Text>
      </TouchableOpacity>
  );
}

export {Button};
