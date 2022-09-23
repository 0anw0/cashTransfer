import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {SearchKeyCom} from '../styles/index';

function SearchKey(props) {
  const [selected, setSelected] = useState(1);

  const selectKey = (key) => { 
    setSelected(key)
    props.selectKey(key)
  }

  return (
    <View style={SearchKeyCom.container}>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => selectKey(1)}>
        <Text style={SearchKeyCom.label}>برقم الهاتــــف </Text>

        <View
          style={[
            SearchKeyCom.boxDimentions,
            selected == 1 ? SearchKeyCom.selected : SearchKeyCom.notSelected,
          ]}></View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => selectKey(2)}>
        <Text style={SearchKeyCom.label}>بالتاريـــخ </Text>

        <View
          style={[
            SearchKeyCom.boxDimentions,
            selected == 2 ? SearchKeyCom.selected : SearchKeyCom.notSelected,
          ]}></View>
      </TouchableOpacity>
    </View>
  );
}

export {SearchKey};
