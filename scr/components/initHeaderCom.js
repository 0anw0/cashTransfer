import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {limitProgressBar} from '../styles/index';

function InitHeader() {
  return (
    <View
      style={[
        limitProgressBar.container,
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <Text style={[limitProgressBar.limitText, limitProgressBar.emptyLabel]}>
        من فضلك أضاف رقم هاتف لبدأ العمليات
      </Text>
    </View>
  );
}

export {InitHeader};
