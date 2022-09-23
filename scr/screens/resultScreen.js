import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import {EmptyPadding, TxtInput, Divider, Header, Button} from '../components/index';
import {colorSchema} from '../config';
import {resButtonSty} from '../styles/componentStyle';

const {MainBtn} = colorSchema;

const recentBtn = ['Home', 'Home', 'Home', 'Home'];

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onNav = path => {
    this.props.navigation.navigate(`${path}`);
  };

  render() {
    let {processes} = this.props.payment;
    const {providerNumber, recipientNumber, value, date} =
      processes[processes.length - 1];
    return (
      <View style={{backgroundColor: '#F0FCFF', flex: 1}}>
        <Header title={'عمليـــــة ناجحـــــة'} />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <EmptyPadding ratio={0.025} />

          <TxtInput
            label={'الوقت'}
            disabled={true}
            value={date.toLocaleTimeString('ar-EG')}
            textAlign={'center'}
          />

          <EmptyPadding ratio={0.0125} />
          <TxtInput
            label={'التاريـــــــخ'}
            disabled={true}
            value={date.toLocaleDateString('ar-EG')}
            textAlign={'center'}
          />

          <EmptyPadding ratio={0.0125} />
          <TxtInput
            label={'الرقم الراسل'}
            disabled={true}
            textAlign={'center'}
            value={providerNumber}
            digitType={'phoneNo'}
          />

          <EmptyPadding ratio={0.0125} />
          <TxtInput
            label={'الرقم المستقبل'}
            textAlign={'center'}
            disabled={true}
            value={recipientNumber}
            digitType={'phoneNo'}
          />

          <EmptyPadding ratio={0.0125} />
          <TxtInput
            label={'الملبغ المحول'}
            leftIconTitle={'ج'}
            textAlign={'center'}
            value={value}
            disabled={true}
          />

          <EmptyPadding ratio={0.0125} />
          <Divider />
          <EmptyPadding ratio={0.0125} />
          <Button title={'الرئيسية'} onPress={this.onNav('Home')}/>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    payment: state.payment,
  };
};
/*
const mapDispatchToProps = state => {
  return {
    ...state,
  };
};
*/
export default connect(mapStateToProps)(Result);
//export {SignIn};

/**
 * 
 * 
 * 
 * <View style={resButtonSty.container}>
            {recentBtn.map(item => (
              <TouchableOpacity
                style={resButtonSty.recentIcon}
                onPress={() => this.onNav(item)}>
                <Text style={resButtonSty.icon}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
 */