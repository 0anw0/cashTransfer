import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {colorSchema} from '../config';
import {DTPickerComSty} from '../styles/index';

const {MainBtn} = colorSchema;
function SearchBar(props) {

  const {sKey, searchContent} = props;
  const [phoneNumber, setPhoneNumber] = useState('');
  //console.log('LOG SEARCH KEY: ', searchContent)
  const onPhoneValueChange = no => {
    setPhoneNumber(no);
    props.updateSearchContent(no);
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={DTPickerComSty.container}>
        <TouchableOpacity
          style={DTPickerComSty.changeDTButton}
          onPress={() => props.getSearch()}>
          <Text style={DTPickerComSty.changeDTButtonTitle}>بحـــــث</Text>
        </TouchableOpacity>
        {sKey == 2 ? (
          <TouchableOpacity
            style={DTPickerComSty.DTLabelContainer}
            onPress={() => props.showDTPicker()}>
            <Text style={DTPickerComSty.DTLabel}>
              {new Date(searchContent).toDateString()}
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={DTPickerComSty.DTLabelContainer}>
            <TextInput
              style={DTPickerComSty.inputTextSty}
              onChangeText={no => onPhoneValueChange(no)}
              placeholder={`أدخل رقم الهاتف`}
              value={phoneNumber}
              maxLength={11}
              keyboardType="decimal-pad"
              placeholderTextColor={MainBtn}
            />
          </View>
        )}
      </View>
    </View>
  );
}

export {SearchBar};
