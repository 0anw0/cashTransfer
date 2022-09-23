import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {
  Button,
  EmptyPadding,
  ValueIncrement,
  Header,
} from '../components/index';
import {updateReturnPersent} from '../redux/slices/appDataSlice';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{backgroundColor: '#F0FCFF', flex: 1}}>
        <Header title={'إعدادات'} />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <EmptyPadding ratio={0.025} />
          <ValueIncrement
            title={'نسبة الربــــح'}
            value={this.props.returnPersentage}
            updateReturnPersent={this.props.updateReturnPersent}
          />

          <EmptyPadding ratio={0.65} />

          <Button
            title={'حفظ'}
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    returnPersentage: state.appData.setting.returnPersentage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateReturnPersent: persent => dispatch(updateReturnPersent(persent)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
//export {SignIn};
