import React from 'react';
import {View, Text, Alert} from 'react-native';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import {connect} from 'react-redux';

import {EmptyPadding, TxtInput, Button, Header} from '../components/index';

class SecStepScr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  initTransfer = () => {
    const {secretKey} = this.props.route.params;
    //  console.log(this.props.route.params)
    const {providerNumber, recipientNumber, value, network} =
      this.props.paymentProcess;
    let call = '';
    if (network == 1) call = `*7*9*${recipientNumber}*${value}#`;
    else if (network == 2)
      call = `*777*1*${secretKey}*${providerNumber}*${recipientNumber}*${value}#`;
    else if (network == 3 || network == 4)
      Alert.alert(
        'خدمة غير متاحه',
        'الخدمة غير متاحه الأن باﻷرقام orange & we',
        [
          {
            text: 'عودة للرئيسية',
            onPress: () => this.props.navigation.navigate('Home'),
          },
        ],
      );

    //  console.log('call: ', call);
    if (call.length > 0) {
      RNImmediatePhoneCall.immediatePhoneCall(`${call}`);
      this.props.navigation.navigate('OnSubmit');
    }
  };

  render() {
    const {providerNumber, cost, recipientNumber, value} =
      this.props.paymentProcess;
    return (
      <View style={{backgroundColor: '#F0FCFF', flex: 1}}>
        <Header title={'تفاصيـــــل العمليــــة'} />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <EmptyPadding ratio={0.05} />
          <TxtInput
            label={'الرقم الحالي'}
            disabled={true}
            value={providerNumber}
            textAlign={'center'}
            digitType={'phoneNo'}
          />

          <EmptyPadding ratio={0.0125} />
          <TxtInput
            label={'الرقم المرسل له'}
            disabled={true}
            value={recipientNumber}
            textAlign={'center'}
            digitType={'phoneNo'}
          />

          <EmptyPadding ratio={0.0125} />
          <TxtInput
            label={'القيمـــة'}
            disabled={true}
            leftIconTitle={'ج'}
            value={value}
            textAlign={'center'}
          />

          <EmptyPadding ratio={0.0125} />
          <TxtInput
            label={'التكلفة'}
            leftIconTitle={'ج'}
            value={cost}
            disabled={true}
            textAlign={'center'}
          />

          <EmptyPadding ratio={0.05} />
          <Button
            title={'تحويـــــــــل'}
            onPress={() => this.initTransfer()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    paymentProcess: state.payment.currentState,
    networkIds: state.appData.setting.networkId,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps)(SecStepScr);
//export {SignIn};
