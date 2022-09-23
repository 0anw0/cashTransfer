import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {
  LimitProgressBar,
  NumberPicker,
  EmptyPadding,
  HomeIcons,
} from '../components/index';
import NumberPickerModal from '../Modals/NumberPickerModal';
import {
  initAppData,
  setActiveNoId,
  updateCurrentDay,
} from '../redux/slices/appDataSlice';
import {addInitState, renewalConsumption} from '../redux/slices/numberSlice';
import {homeScreenIcons} from '../util';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentNumber: this.props.numbers.find(
        item => item.id == this.props.activeId,
      ),
    };
  }

  //currentNumber: this.props.activeNo,

  componentDidMount() {
    this.props.renewalConsumption()
    this.props.updateCurrentDay(new Date());
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

  toggleModalVisiability = () => {
    this.setState(prevState => ({showModal: !prevState.showModal}));
  };

  toggleActiveNumber = no => {
    this.setState({currentNumber: no});
    this.props.setActiveNumberId(no.id);
  };

  onNavigate = screenName => {
    this.props.navigation.navigate(`${screenName}`);
  };

  render() {
    const {showModal, currentNumber} = this.state;

    return (
      <View style={{backgroundColor: 'hsla(0, 0%, 100%, 1)', flex: 1}}>
        <LimitProgressBar number={currentNumber || []} />

        <EmptyPadding ratio={0.05} />
        <NumberPicker
          number={currentNumber || []}
          onPress={() => this.toggleModalVisiability()}
          disabled={false}
        />

        <EmptyPadding ratio={0.05} />
        <HomeIcons
          navigate={this.onNavigate}
          iconSet={homeScreenIcons}
          numbers={this.props.numbers}
        />
        <NumberPickerModal
          setTextModalVisible={() => this.toggleModalVisiability()}
          toggleActiveNumber={this.toggleActiveNumber}
          data={this.props.numbers}
          showModal={showModal}
          navigate={this.props.navigation.navigate}
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
    addInitState: res => dispatch(addInitState(res)),
    initAppData: res => dispatch(initAppData(res)),
    setActiveNumberId: res => dispatch(setActiveNoId(res)),
    updateCurrentDay: res => dispatch(updateCurrentDay(res)),
    renewalConsumption: () => dispatch(renewalConsumption()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
//export {SignIn};
