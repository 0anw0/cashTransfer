import React from 'react';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';

import {EmptyPadding, Header} from '../components/index';
import {screenHeight, screenWidth} from '../config';
import {
  setActiveNoId,
  updateCurrentDay,
  updateReturnPersent,
} from '../redux/slices/appDataSlice';
import {addInitState, deleteNumber} from '../redux/slices/numberSlice';
import {numberSelectorModal} from '../styles';

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

const Item = function ({item, deleteNumber}) {
  const {title, consume, limit} = item;
  let barWidth = (limit - consume) / limit;
  let barColor = chooseBarColor(barWidth);
  //console.log(barColor);

  return (
    <TouchableOpacity style={numberSelectorModal.container}>
      <View
        style={[
          numberSelectorModal.bar,
          {
            backgroundColor: barColor,
            width: barWidth > 0.01 ? screenWidth * 0.7 * barWidth : screenWidth,
          },
        ]}></View>
      <View style={[numberSelectorModal.textContainer, {flexDirection: 'row'}]}>
        <TouchableOpacity
          style={{width: '10%'}}
          onPress={() => deleteNumber(item.id)}>
          <FastImage
            style={{width: 30, height: 30}}
            source={require('../../assets/trash.png')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
        <View
          style={{
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={
              (numberSelectorModal.limitText,
              {color: chooseFontColor(barWidth)})
            }>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

class DeleteNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: this.props.numbers,
    };
  }

  renderItem = ({item}) => (
    <Item item={item} deleteNumber={this.deleteNumber} />
  );
  deleteNumber = id => {
    this.props.deleteNumber(id);
    this.props.setActiveNoId(0);
    let data = this.state.numbers.filter(element => element.id != id);
    this.setState({numbers: data});
  };
  render() {
    return (
      <View style={{backgroundColor: '#F0FCFF', flex: 1}}>
        <Header title={'مســــح رقــــــم'} />
        <EmptyPadding ratio={0.05} />
        {this.state.numbers.length > 0 && (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <FlatList
              data={this.props.numbers}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    numbers: state.number,
    activeId: state.appData.activeId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteNumber: res => dispatch(deleteNumber(res)),
    setActiveNoId: res => dispatch(setActiveNoId(res)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteNumber);
//export {SignIn};
