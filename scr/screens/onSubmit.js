import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux';
import {SpecialButton, EmptyPadding} from '../components';
import {updateLimit} from '../redux/slices/numberSlice';
import {
  confirmNewPayment,
  cancelNewPayment,
} from '../redux/slices/paymentSlice';

class OnSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSuccess = () => {
    const {providerNumber, value} = this.props.paymentProcess;
    this.props.confirmNewPayment();
    this.props.updateLimit({phoneNo: providerNumber, consume: value});
    this.props.navigation.navigate('Result');
  };

  onFailure = () => {
    Alert.alert('عملية فاشلة', 'هل تريد أعادة العملية مرة أخري؟', [
      {
        text: 'نعــــم',
        onPress: () => this.onRepeat(),
      },
      /*{text: 'عملية أخري', onPress: () => this.onStartAnotherProcess()},*/
      {text: 'لا', onPress: () => this.onCancel()},
    ]);
  };

  onCancel = () => {
    this.props.cancelNewPayment();
    this.props.navigation.navigate('Home');
  };

  onStartAnotherProcess = () => {
    this.props.cancelNewPayment();
    this.props.navigation.navigate('FirstStepScr', {retry: false});
  };

  onRepeat = () => {
    this.props.navigation.navigate('FirstStepScr');
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: '#F0FCFF',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <SpecialButton
          bgColor={'#FFFFFF'}
          color={'#2C44C2'}
          title={'العمليـــة تمــــت بنجــاح'}
          onPress={this.onSuccess}
        />
        <EmptyPadding ratio={0.05} />
        <SpecialButton
          bgColor={'#FFE8E8'}
          color={'#C22C2C'}
          title={'العمليـــة فشلــــــت '}
          onPress={this.onFailure}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    paymentProcess: state.payment.currentState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    confirmNewPayment: () => dispatch(confirmNewPayment()),
    cancelNewPayment: () => dispatch(cancelNewPayment()),
    updateLimit: element => dispatch(updateLimit(element)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OnSubmit);
//export {SignIn};
