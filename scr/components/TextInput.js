import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

import {textInputComponent} from '../styles/index';

function TxtInput(props) {
  const {leftIconTitle, label, inputKey, returnKey} = props;
  const keyboardType = props.keyboardType || 'default';
  const secureTextEntry = props.secureTextEntry || false;
  const multiline = props.multiline || false;
  const numberOfLines = props.numberOfLines || 1;
  const textError = props.txtErr;
  const changeText = props.changeText || (() => {});
  const onSubmit = props.onSubmitNext || (() => {});
  const digitType = props.digitType || 'default';

  let digitLimit = props.digitLimit || 11;
  let {value} = props;

  const formatNo = phone => {
    return `${phone.slice(0, 3)} ${phone.slice(3, 7)} ${phone.slice(7, 11)}`;
  };

  if (digitType == 'phoneNo' && value != undefined) {
    value = formatNo(value);
    digitLimit = 15;
  }

  const handleInputChange = val => {
    //setTextValue(val);
    changeText(inputKey, val);
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
        {label && <Text style={textInputComponent.label}>{label}</Text>}
        <View
          style={[
            textInputComponent.container,
            textError && {
              borderColor: 'red',
            },
          ]}>
          {leftIconTitle && (
            <View style={textInputComponent.left}>
              <Text style={textInputComponent.leftIconTitle}>
                {leftIconTitle}
              </Text>
            </View>
          )}
          <TextInput
            style={[
              textInputComponent.inputStyle,
              {textAlign: props.textAlign},
            ]}
            onChangeText={val => handleInputChange(val)}
            editable={props.disabled ? false : true}
            selectTextOnFocus={props.disabled ? false : true}
            value={`${value}`}
            keyboardType={keyboardType}
            keyboardAppearance="default"
            multiline={multiline}
            numberOfLines={numberOfLines}
            secureTextEntry={secureTextEntry}
            maxLength={digitLimit}
            returnKeyType={returnKey ? returnKey : 'done'}
            onSubmitEditing={() => onSubmit()}
            onEndEditing={() => onSubmit()}
          />
        </View>
        <View style={{height: 20}}>
          {textError && (
            <Text style={textInputComponent.error}>{textError}</Text>
          )}
        </View>
      </View>
    </View>
  );
}

export {TxtInput};
//<Text style={textInputComponent.inputLabel}>{props.label}</Text>
