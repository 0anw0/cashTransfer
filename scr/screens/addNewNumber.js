import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {PropTypes} from 'prop-types';
import {
  Button,
  EmptyPadding,
  TxtInput,
  Header,
  DTPicker,
  ReportTypeSelector,
} from '../components/index';
import {addNewNumber} from '../redux/slices/numberSlice';
import {setActiveNoId} from '../redux/slices/appDataSlice';

const sections = [
  {
    id: 3,
    name: 'شهري',
  },
  {
    id: 2,
    name: 'أسبوعي',
  },
  {
    id: 1,
    name: 'يومي',
  },
];

class AddNewNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      existedNumbers: [],
      showModal: false,
      showDTPicker: false,
      renewalDate: new Date(),
      newPhoneNo: '',
      limit: 0,
      consume: 0,
      newPhoneNoTxtErr: null,
      senderPhoneNotxtErr: null,
      transValueError: null,
      transCostError: null,
      limitTxtErr: null,
      consumeTxtErr: null,
      renewalType: 1,
    };
  }

  componentDidMount() {
    let existedNumbers = [];
    if (this.props.numbers.length > 0) {
      this.props.numbers.forEach(element => {
        existedNumbers.push(element.phoneNo);
      });
      this.setState({existedNumbers});
    }
  }

  /*
  getActiveNoById =() => {

  }
  */

  toggleModalVisiability = () => {
    this.setState(prevState => ({showModal: !prevState.showModal}));
  };

  toggleActiveNumber = no => {
    this.setState({currentNumber: no});
  };
  toggleDTPicker = () => {
    this.setState(prevState => ({showDTPicker: !prevState.showDTPicker}));
  };

  setNewRenewalDate = val => {
    this.setState({
      renewalDate: val.nativeEvent.timestamp,
      showDTPicker: false,
    });
  };

  _handleTextInput = (key, value) => {
    this.setState({[key]: value});
  };

  checkNewNumber = () => {
    const {newPhoneNo, existedNumbers} = this.state;
    let value = newPhoneNo.slice(0, 2);
    let networkKeys = ['010', '011', '012', '015'];
    let phoneNetworkKey = newPhoneNo.slice(0, 3);

    if (newPhoneNo.length < 11)
      this.setState({newPhoneNoTxtErr: 'يجب أن يتكون من 11 رقم'});
    else if (!networkKeys.includes(phoneNetworkKey))
      this.setState({newPhoneNoTxtErr: 'الرقم غير صحيح'});
    else if (value != '01')
      this.setState({newPhoneNoTxtErr: 'الرقم يجب أن يبدأ ب 01'});
    else if (existedNumbers.includes(newPhoneNo))
      this.setState({newPhoneNoTxtErr: 'الرقم موجود بالفعل!'});
    else this.setState({newPhoneNoTxtErr: null});
  };

  checkConsumed = () => {
    const {limit, consume} = this.state;
    if (Number(limit) > Number(consume)) {
      this.setState({consumeTxtErr: null});
    } else {
      this.setState({consumeTxtErr: 'المستخدم يجب إن يكون أقل من حد السحب'});
    }
  };

  formatNo = phone => {
    let networkKey = phone.slice(0, 3);
    let secOne = phone.slice(3, 7);
    let secTwo = phone.slice(7, 11);
    return `${networkKey} ${secOne} ${secTwo}`;
  };

  confirmAddingNumber = () => {
    const {newPhoneNo, limit, consume, renewalDate, renewalType} = this.state;
    //console.log('LOG: ', {newPhoneNo, limit, consume, renewalDate});
    if (
      newPhoneNo.length == 11 &&
      limit.length > 0 &&
      Number(consume) <= Number(limit)
    ) {
      let phoneNumberId = `pId-${Number(Date.now())}`;
      let networkKey = this.state.newPhoneNo.slice(0, 3);
      let networkID;

      if (networkKey == '010') networkID = 1;
      else if (networkKey == '011') networkID = 2;
      else if (networkKey == '012') networkID = 3;
      else if (networkKey == '015') networkID = 4;

      let numberTitle = this.formatNo(newPhoneNo);

      let phoneNumberObj = {
        id: phoneNumberId,
        phoneNo: newPhoneNo,
        limit: limit,
        consume: consume,
        renewalDate: renewalDate,
        renewalPeriod: renewalType,
        network: networkID,
        title: numberTitle,
      };
      //console.log(phoneNumberObj);
      this.props.addNewNumber(phoneNumberObj);
      this.props.setActiveNoId(phoneNumberId);
      this.props.navigation.navigate('Home');
    }
  };

  toggleRenewalDuration = value => {
    this.setState({renewalType: value});
  };

  render() {
    const {
      showDTPicker,
      newPhoneNo,
      limitTxtErr,
      consumeTxtErr,
      limit,
      consume,
      newPhoneNoTxtErr,
      renewalDate,
    } = this.state;
    return (
      <View style={{backgroundColor: '#F0FCFF', flex: 1}}>
        <Header title={'رقم جديـــــد'} />
        <KeyboardAwareScrollView>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {showDTPicker && (
              <RNDateTimePicker
                value={new Date()}
                accentColor={'#3656FF'}
                minimumDate={new Date()}
                onChange={val => this.setNewRenewalDate(val)}
              />
            )}

            <EmptyPadding ratio={0.005} />
            <TxtInput
              label={'الرقم'}
              digitLimit={11}
              value={newPhoneNo}
              returnKey={'next'}
              textAlign={'center'}
              inputKey={'newPhoneNo'}
              txtErr={newPhoneNoTxtErr}
              keyboardType={'number-pad'}
              changeText={this._handleTextInput}
              onSubmitNext={this.checkNewNumber}
            />

            <EmptyPadding ratio={0.005} />
            <TxtInput
              value={limit}
              digitLimit={5}
              inputKey={'limit'}
              returnKey={'next'}
              leftIconTitle={'ج'}
              textAlign={'center'}
              txtErr={limitTxtErr}
              keyboardType={'number-pad'}
              label={'قيمــــة حد السحــــب'}
              changeText={this._handleTextInput}
            />

            <EmptyPadding ratio={0.005} />
            <TxtInput
              digitLimit={5}
              value={consume}
              label={'المستخدم'}
              returnKey={'next'}
              leftIconTitle={'ج'}
              textAlign={'center'}
              inputKey={'consume'}
              txtErr={consumeTxtErr}
              keyboardType={'number-pad'}
              onSubmitNext={this.checkConsumed}
              changeText={this._handleTextInput}
            />

            <EmptyPadding ratio={0.005} />

            <EmptyPadding ratio={0.005} />
            <DTPicker
              label={' ميعاد التجديـــد القـــادم'}
              onChangePress={this.toggleDTPicker}
              value={renewalDate}
            />
            <EmptyPadding ratio={0.05} />

            <ReportTypeSelector
              sections={sections}
              toggleSection={this.toggleRenewalDuration}
            />
            <EmptyPadding ratio={0.05} />
            <Button
              title={'إضــافـــــة'}
              onPress={() => this.confirmAddingNumber()}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    numbers: state.number,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewNumber: newNumber => dispatch(addNewNumber(newNumber)),
    setActiveNoId: res => dispatch(setActiveNoId(res)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewNumber);
//export {SignIn};
