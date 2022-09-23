import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import {screenWidth, screenHeight, colorSchema} from '../config/index';

import {
  limitProgressBar,
  ButtonComponent,
  linearGradientColors,
  linearGradientColorsOutline,
} from '../styles/index';

function chooseBarColor(barWidth) {
  if (barWidth < 0.2) return 'red';
  else if (barWidth > 0.2 && barWidth < 0.4) return 'orange';
  else if (barWidth > 0.4 && barWidth < 0.6) return 'yellow';
  else return '#32D83D';
}

function chooseFontColor(barWidth) {
  if (barWidth > 0.6) return '#0C1788';
  else return '#0B3B11';
}

function LimitProgressBar(props) {
  //props are: consume / limit
  const {consume, limit} = props.number;
  let barWidth;

  if (Number(limit) > Number(consume)) barWidth = (limit - consume) / limit;
  else barWidth = 0;
  //console.log('LOG: ', limit, consume, barWidth);
  //const [barWidth, setbarWidth] = useState(0.75);
  return (
    <TouchableOpacity style={limitProgressBar.container}>
      <View
        style={[
          limitProgressBar.bar,
          {
            width: screenWidth * barWidth,
            backgroundColor: chooseBarColor(barWidth),
          },
        ]}></View>
      <View style={limitProgressBar.textContainer}>
        <Text
          style={[
            limitProgressBar.limitText,
            {color: chooseFontColor(barWidth)},
          ]}>
          {consume != undefined
            ? `الباقي هو ${limit - consume} جنية من ${limit} جنية `
            : 'قم بأضافة رقم هاتف'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default LimitProgressBar;
