import React from 'react';
import {View, Text} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  NumberPicker,
  EmptyPadding,
  TxtInput,
  Button,
  Header,
  DTPicker,
  ReportTypeSelector,
} from '../components/index';
import NumberPickerModal from '../Modals/NumberPickerModal';
import {editANumber} from '../redux/slices/numberSlice';
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

class LimitUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showDTPicker: false,
      renewalDate: new Date(),
      newLimitErr: null,
      id: '',
      limit: 0,
      consume: 0,
      renewalDate: new Date(),
      renewalPeriod: 0,
      network: 0,
      phoneNo: '',
      title: '',
    };
  }

  componentDidMount() {
    let activeNumber = this.props.numbers.find(
      item => item.id == this.props.activeId,
    );

    this.setState({...activeNumber});
  }

  toggleModalVisiability = () => {
    this.setState(prevState => ({showModal: !prevState.showModal}));
  };

  toggleActiveNumber = no => {
    this.setState({...no});
    this.props.setActiveNumberId(no.id);
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

  onAddNewValue = () => {
    if (this.state.limit < this.state.consume)
      this.setState({
        newLimitErr: 'حد السحب الجديد يجب أن يكون أكبر من المستخدم!',
      });
    else this.setState({newLimitErr: null});
  };

  confirmChanges = () => {
    const {
      id,
      limit,
      title,
      network,
      phoneNo,
      consume,
      renewalDate,
      renewalPeriod,
    } = this.state;
    this.props.editANumber({
      id,
      limit,
      title,
      network,
      phoneNo,
      consume,
      renewalDate,
      renewalPeriod,
    });
    this.props.navigation.navigate('Home');
  };

  toggleRenewalDuration = value => {
    this.setState({renewalPeriod: value});
  };
  render() {
    const {
      showDTPicker,
      renewalDate,
      showModal,
      newLimitErr,
      id,
      title,
      consume,
      limit,
      renewalPeriod
    } = this.state;
    return (
      <View style={{backgroundColor: '#F0FCFF', flex: 1}}>
        <Header title={'تحديث حد السحـــــب'} />
        <KeyboardAwareScrollView>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {showDTPicker && (
              <RNDateTimePicker
                value={new Date()}
                accentColor={'#a8b7ff'}
                minimumDate={new Date()}
                onChange={val => this.setNewRenewalDate(val)}
              />
            )}

            <EmptyPadding ratio={0.05} />
            <NumberPicker
              number={{id, title, consume, limit}}
              onPress={() => this.toggleModalVisiability()}
              disabled={false}
            />

            <EmptyPadding ratio={0.025} />
            <TxtInput
              label={'المستخدم'}
              value={consume}
              leftIconTitle={'ج'}
              textAlign={'right'}
              disabled={true}
              changeText={this._handleTextInput}
              keyboardType={'number-pad'}
              inputKey={'consume'}
            />

            <EmptyPadding ratio={0.0125} />
            <TxtInput
              label={'القيمــــة الجديدة'}
              value={limit}
              leftIconTitle={'ج'}
              keyboardType={'number-pad'}
              textAlign={'right'}
              inputKey={'limit'}
              txtErr={newLimitErr}
              changeText={this._handleTextInput}
              onSubmitNext={this.onAddNewValue}
            />

            <EmptyPadding ratio={0.0125} />
            <DTPicker
              label={'ميعاد التجــديد'}
              onChangePress={this.toggleDTPicker}
              value={renewalDate}
            />
            <EmptyPadding ratio={0.05} />

            <ReportTypeSelector
              value={renewalPeriod}
              sections={sections}
              toggleSection={this.toggleRenewalDuration}
            />
            <EmptyPadding ratio={0.075} />
            <Button
              title={'تحديـــــــث'}
              onPress={() => this.confirmChanges()}
            />
          </View>
        </KeyboardAwareScrollView>
        <NumberPickerModal
          setTextModalVisible={() => this.toggleModalVisiability()}
          toggleActiveNumber={this.toggleActiveNumber}
          data={this.props.numbers}
          showModal={showModal}
        />
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
    editANumber: res => dispatch(editANumber(res)),
    setActiveNumberId: res => dispatch(setActiveNoId(res)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LimitUpdate);
//export {SignIn};
