import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {DTPickerComSty} from '../styles/index';

function DTPicker(props) {
  //const [date, setDate] = useState(undefined);

  let {value, label} = props;
  let date;
  if (value == undefined) date = new Date();
  else date = new Date(value);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
        {label && <Text style={DTPickerComSty.label}>{label}</Text>}
        <View style={DTPickerComSty.container}>
          <TouchableOpacity
            style={DTPickerComSty.changeDTButton}
            onPress={() => props.onChangePress()}>
            <Text style={DTPickerComSty.changeDTButtonTitle}>تغييـــــر</Text>
          </TouchableOpacity>
          <View style={DTPickerComSty.DTLabelContainer}>
            <Text style={DTPickerComSty.DTLabel}>
              {date.toDateString()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export {DTPicker};
