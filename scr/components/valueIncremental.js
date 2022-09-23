import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {ValueIncSty} from '../styles/index';

function ValueIncrement(props) {
  const [returnValue, setReturnValue] = useState(props.value);

  const incrementVal = () => {
    let val = returnValue + 0.25;
    setReturnValue(val);
    props.updateReturnPersent(val);
  };

  const decrementVal = () => {
    let val = returnValue - 0.25;
    setReturnValue(val);
    props.updateReturnPersent(val);
  };
  return (
    <View style={ValueIncSty.fullContainer}>
      <Text style={ValueIncSty.label}>{props.title}</Text>
      <View style={ValueIncSty.container}>
        <TouchableOpacity
          style={ValueIncSty.iconContainer}
          onPress={() => incrementVal()}>
          <Text style={{color: '#fff', fontSize: 24}}>+</Text>
        </TouchableOpacity>
        <View style={ValueIncSty.titleContainer}>
          <Text style={ValueIncSty.title}>{returnValue}%</Text>
        </View>
        <TouchableOpacity
          style={ValueIncSty.iconContainer}
          onPress={() => {
            if (returnValue > 0) decrementVal();
          }}>
          <Text style={{color: '#fff', fontSize: 24}}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export {ValueIncrement};
