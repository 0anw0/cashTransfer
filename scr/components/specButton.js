import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {SpecButtonSty} from '../styles/index';

function SpecialButton(props) {
  const [bgColor, setbgColor] = useState(props.bgColor);
  const [color, setcolor] = useState(props.color);

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        SpecButtonSty.container,
        {
          borderColor: color,
          backgroundColor: bgColor,
        },
      ]}>
      <Text style={[SpecButtonSty.title, {color: props.color}]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

export {SpecialButton};
