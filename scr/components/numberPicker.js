import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import {ButtonComponent} from '../styles/index';

function NumberPicker(props) {
  //console.log("Data2: ", props)

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        disabled={props.disabled ? true : false}
        style={[
          ButtonComponent.outline,
          props.disabled && {
            borderColor: '#9B9B9B',
          },
        ]}
        onPress={() => props.onPress()}>
        <View style={ButtonComponent.iconContainer}>
          <FastImage
            style={{width: 15, height: 15}}
            source={require('../../assets/down-arrow.png')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={ButtonComponent.numberContainer}>
          <Text
            style={[
              ButtonComponent.outlineTitle,
              props.disabled && {color: '#9B9B9B'},
            ]}>
            {props.number.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export {NumberPicker};
