import React from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  EmptyPadding,
  SearchBar,
  Header,
  SearchKey,
  ResultBox,
} from '../components/index';
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: 1,
      showDTPicker: false,
      searchContent: undefined,
      results: [],
    };
  }

  selectSearchKey = key => {
    this.setState({searchKey: key, results: []});
    this.updateSearchContent(key == 2 ? new Date() : '');

    //console.log('first ', key);
  };

  toggleDTPicker = () => {
    this.setState(prevState => ({showDTPicker: !prevState.showDTPicker}));
  };

  updateSearchContent = content => {
    this.setState({searchContent: content, showDTPicker: false});
  };

  search = () => {
    const {searchKey, searchContent} = this.state;
    let results = [],
      processes = this.props.processes;
    if (searchKey == 1) {
      //console.log('Here');
      processes.forEach(element => {
        if (element.recipientNumber == searchContent) {
          results.push(element);
        }
      });
    } else if (searchKey == 2) {
      console.log("SC ", searchContent)
      processes.forEach(element => {
        let searchDate = new Date(searchContent);
        let currentDate = new Date(element.date);
        //console.log("1> ", searchDate, "2> ", currentDate)
        if (currentDate.toDateString() == searchDate.toDateString()) {
          results.push(element);
        }
      });
    }
    this.setState({results});
  };

  render() {
    const {searchKey, searchContent} = this.state;
    return (
      <KeyboardAvoidingView style={{backgroundColor: '#F0FCFF', flex: 1}}>
        <Header title={'بحــــــث'} />

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {this.state.showDTPicker && (
            <RNDateTimePicker
              value={new Date()}
              accentColor={'#3656FF'}
              maximumDate={new Date()}
              onChange={val => this.updateSearchContent(val.nativeEvent.timestamp)}
            />
          )}
          <EmptyPadding ratio={0.025} />
          <SearchKey selectKey={this.selectSearchKey} />
          <SearchBar
            sKey={searchKey}
            showDTPicker={this.toggleDTPicker}
            searchContent={searchContent}
            getSearch={this.search}
            updateSearchContent={this.updateSearchContent}
          />
          <EmptyPadding ratio={0.025} />
          <ResultBox sKey={searchKey} results={this.state.results} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => {
  return {
    processes: state.payment.processes,
  };
};

export default connect(mapStateToProps)(Search);
//export {SignIn};
