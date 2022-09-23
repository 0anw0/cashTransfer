import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  LimitProgressBar,
  NumberPicker,
  EmptyPadding,
  TxtInput,
  Button,
} from '../components/index';

import NumberPickerModal from '../Modals/NumberPickerModal';
import {addNewPayment} from '../redux/slices/paymentSlice';
import {setActiveNoId} from '../redux/slices/appDataSlice';

class FirstStepScr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNo: '',
      phoneNoConfirm: '',
      transferValue: 0,
      transferCost: 0,
      txtErr: null,
      txtErrConfirm: null,
      transValueError: null,
      transCostError: null,
      currentNumber: this.props.numbers.find(
        item => item.id == this.props.activeId,
      ),
      numberNetwork: 0,
      secretKey: 0,
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.setState({
        currentNumber: this.props.numbers.find(
          item => item.id == this.props.activeId,
        ),
      });
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.activeId == nextProps.activeId) return true;
    else return false;
  }

  toggleModalVisiability = () => {
    this.setState(prevState => ({showModal: !prevState.showModal}));
  };

  toggleActiveNumber = no => {
    this.setState({currentNumber: no, transferValue: 0, transferCost: 0});
    this.props.setActiveNoId(no.id);
  };

  _handleTextInput = (key, value) => {
    this.setState({[key]: value});
  };

  checkValue = () => {
    const {currentNumber, transferValue} = this.state;
    let remaining = currentNumber.limit - currentNumber.consume;
    this.calculateCostFromValue(transferValue);
    if (transferValue > remaining)
      this.setState({transValueError: 'قيمة السحب أكبر من حد السحب!'});
    else this.setState({transValueError: null});
  };

  calculateCostFromValue = value => {
    let revenue = (Number(value) * this.props.returnPersentage) / 100;
    let cost = Number(value) + Number(revenue);
    this.setState({transferCost: String(cost)});
  };

  checkNumberConfirmation = () => {
    const {phoneNo, phoneNoConfirm} = this.state;
    this.setState({
      txtErrConfirm: phoneNo !== phoneNoConfirm ? 'الرقم غير مطابق!' : null,
    });
  };

  checkProviderAndSender = () => {
    let provider = this.state.currentNumber.title.slice(0, 3);
    let sender = this.state.phoneNo.slice(0, 3);
    this.setState({
      txtErr: provider !== sender ? 'الشبكة غير متطايقة' : null,
    });
  };

  onNavigate = () => {
    const {
      currentNumber,
      transferCost,
      phoneNo,
      phoneNoConfirm,
      transferValue,
      secretKey,
    } = this.state;
    let PaymentProcess = {
      providerNumber: currentNumber.phoneNo,
      recipientNumber: phoneNo,
      paymentType: 1,
      value: transferValue,
      cost: transferCost,
      return: transferCost - transferValue,
      returnPrecentage: transferCost - transferValue / transferCost,
      paymentId: `pyid-${Number(Date.now())}`,
      network: currentNumber.network,
      date: new Date(),
      secretKey: secretKey,
    };

    if (
      transferCost.length > 0 &&
      phoneNo.length > 0 &&
      phoneNoConfirm.length > 0 &&
      transferValue.length > 0 &&
      phoneNo == phoneNoConfirm
    ) {
      this.props.addNewPayment(PaymentProcess);
      this.props.navigation.navigate('SecStepScr', {secretKey});
    } else {
      this.setState({
        txtErr: 'أدخل رقم الذي تريد التحويل له',
        txtErrConfirm: null,
        transValueError: 'أدخل قيمة التحويل',
        transCostError: null,
      });
    }
  };

  render() {
    const {
      txtErr,
      txtErrConfirm,
      transValueError,
      transCostError,
      showModal,
      transferCost,
      phoneNo,
      phoneNoConfirm,
      transferValue,
      currentNumber,
      secretKey,
    } = this.state;

    return (
      <View style={{backgroundColor: '#F0FCFF', flex: 1}}>
        <LimitProgressBar number={currentNumber || []} />

        <KeyboardAwareScrollView>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <EmptyPadding ratio={0.05} />
            <NumberPicker
              number={currentNumber || []}
              onPress={() => this.toggleModalVisiability()}
              disabled={false}
            />

            <EmptyPadding ratio={0.05} />
            <TxtInput
              value={phoneNo}
              txtErr={txtErr}
              digitLimit={11}
              returnKey={'next'}
              inputKey={'phoneNo'}
              textAlign={'center'}
              label={'رقم الهاتـــــف'}
              keyboardType={'number-pad'}
              changeText={this._handleTextInput}
              onSubmitNext={this.checkProviderAndSender}
            />

            <EmptyPadding ratio={0.0125} />
            <TxtInput
              digitLimit={11}
              returnKey={'next'}
              textAlign={'center'}
              txtErr={txtErrConfirm}
              value={phoneNoConfirm}
              keyboardType={'number-pad'}
              inputKey={'phoneNoConfirm'}
              label={'تأكيد رقم الهاتـــــف'}
              changeText={this._handleTextInput}
              onSubmitNext={this.checkNumberConfirmation}
            />

            <EmptyPadding ratio={0.0125} />
            <TxtInput
              digitLimit={8}
              returnKey={'next'}
              leftIconTitle={'ج'}
              textAlign={'center'}
              label={'القيمــــــة'}
              txtErr={transValueError}
              keyboardType={'number-pad'}
              changeText={this._handleTextInput}
              onSubmitNext={this.checkValue}
              inputKey={'transferValue'}
              value={transferValue}
            />

            <EmptyPadding ratio={0.0125} />
            <TxtInput
              digitLimit={8}
              leftIconTitle={'ج'}
              value={transferCost}
              textAlign={'center'}
              label={'التكلفــــة'}
              txtErr={transCostError}
              inputKey={'transferCost'}
              keyboardType={'number-pad'}
              changeText={this._handleTextInput}
            />

            {currentNumber.network == 2 && (
              <>
                <EmptyPadding ratio={0.0125} />
                <TxtInput
                  value={secretKey}
                  txtErr={txtErr}
                  digitLimit={6}
                  returnKey={'next'}
                  inputKey={'secretKey'}
                  textAlign={'center'}
                  label={'الرقم السري'}
                  keyboardType={'number-pad'}
                  changeText={this._handleTextInput}
                  onSubmitNext={() => {}}
                />
              </>
            )}
            <EmptyPadding ratio={0.05} />
            <Button title={'إرســـــال'} onPress={() => this.onNavigate()} />
          </View>
        </KeyboardAwareScrollView>
        <NumberPickerModal
          setTextModalVisible={() => this.toggleModalVisiability()}
          toggleActiveNumber={this.toggleActiveNumber}
          showModal={showModal}
          data={this.props.numbers}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    numbers: state.number,
    activeId: state.appData.activeId,
    currentState: state.payment.currentState,
    returnPersentage: state.appData.setting.returnPersentage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewPayment: process => dispatch(addNewPayment(process)),
    setActiveNoId: id => dispatch(setActiveNoId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstStepScr);
//export {SignIn};
