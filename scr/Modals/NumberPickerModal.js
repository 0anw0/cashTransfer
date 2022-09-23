import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {Modal} from 'react-native-paper';
import {connect} from 'react-redux';

import {numberSelectorModal} from '../styles';
import {screenWidth, screenHeight, colorSchema} from '../config/index';

function chooseBarColor(barWidth) {
  if (barWidth < 0.01) return '#BFBFBF';
  else if (barWidth > 0.01 && barWidth < 0.2) return 'red';
  else if (barWidth > 0.2 && barWidth < 0.4) return 'orange';
  else if (barWidth > 0.4 && barWidth < 0.6) return 'yellow';
  else return 'green';
}

function chooseFontColor(barWidth) {
  if (barWidth > 0.6) return 'white';
  else return 'black';
}

const Item = ({item, toggleActiveNumber}) => {
  const {title, consume, limit} = item;

  let barWidth = (limit - consume) / limit;
  let barColor = chooseBarColor(barWidth);
  //console.log(screenWidth, screenWidth * barWidth);
  return (
    <TouchableOpacity
      style={numberSelectorModal.container}
      onPress={() => toggleActiveNumber(item)}>
      <View
        style={[
          numberSelectorModal.bar,
          {
            backgroundColor: barColor,
            width: barWidth > 0.01 ? screenWidth * 0.7 * barWidth : screenWidth,
          },
        ]}></View>
      <View style={numberSelectorModal.textContainer}>
        <Text
          style={
            (numberSelectorModal.limitText, {color: chooseFontColor(barWidth)})
          }>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

function NumberPickerModal(props) {
  const [text, setText] = useState('');
  const [activeNumber, setActiveNumber] = useState({});

  //console.log("Props In Modal0: ", props.data)
  /*function saveText() {
    props.setTextModalVisible();
    props.addText(text);z
  }*/
  const toggleActiveNumber = no => {
    setActiveNumber(no);
    props.toggleActiveNumber(no);
    props.setTextModalVisible();
  };

  const renderItem = ({item}) => (
    <Item item={item} toggleActiveNumber={toggleActiveNumber} />
  );
  return (
    <Modal
      animationType="slide"
      visible={props.showModal}
      onDismiss={() => {
        props.setTextModalVisible();
      }}
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
      {props.data.length > 0 ? (
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <TouchableOpacity
          style={numberSelectorModal.emptyLabelContainer}
          onPress={() => props.navigate('AddNewNumber')}>
          <Text style={{color: 'white', fontSize: 20}}>
            قم بإضافة أرقام لبدأ العملية!
          </Text>
        </TouchableOpacity>
      )}
    </Modal>
  );
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

/*
const mapDispatchToProps = dispatch => {
  return false;
};
*/
export default connect(mapStateToProps)(NumberPickerModal);
