import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {
  Header,
  EmptyPadding,
  TxtInput,
  ReportTypeSelector,
} from '../components/index';

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

class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: 1,
      loading: true,
      dailyStats: {},
      weeklyStats: {},
      monthlyStats: {},
    };
  }

  calculateWeek(currentDate) {
    //console.log("date: ",currentDate)
    let current = new Date(currentDate)
    let startDate = new Date(current.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

    var weekNumber = Math.ceil(days / 7);
    return weekNumber;
  }
  componentDidMount() {
    let currentTime = new Date(),
      daily = [],
      weekly = [],
      monthly = [];
    if (this.props.payment) {
      let {payment} = this.props;
      //console.log('first', payment);

      payment.processes.forEach(element => {
        let process_data = new Date(element.date)
        let dateWeek = this.calculateWeek(process_data);
        let currentWeek = this.calculateWeek(currentTime);

        if (process_data.getFullYear() == currentTime.getFullYear())
          if (process_data.getMonth() == currentTime.getMonth()) {
            monthly.push(element);
            if (dateWeek == currentWeek) {
              weekly.push(element);
              if (process_data.getDate() == currentTime.getDate()) {
                daily.push(element);
              }
            }
          }
      });
    }
    let dailyStats = {
      successfulTrans: daily.length,
      totalTrans: daily.reduce((total, current) => (total += Number(current.value)), 0),
      totalCost: daily.reduce((total, current) => (total += Number(current.cost)), 0),
      totalReturn: daily.reduce(
        (total, current) => (total += Number(current.return)),
        0,
      ),
    };

    let weeklyStats = {
      successfulTrans: weekly.length,
      totalTrans: weekly.reduce(
        (total, current) => (total += Number(Number(current.value))),
        0,
      ),
      totalCost: weekly.reduce((total, current) => (total += Number(current.cost)), 0),
      totalReturn: weekly.reduce(
        (total, current) => (total += Number(Number(current.return))),
        0,
      ),
    };

    let monthlyStats = {
      successfulTrans: monthly.length,
      totalTrans: monthly.reduce(
        (total, current) => (total += Number(current.value)),
        0,
      ),
      totalCost: monthly.reduce((total, current) => (total += Number(current.cost)), 0),
      totalReturn: monthly.reduce(
        (total, current) => (total += Number(current.return)),
        0,
      ),
    };

    this.setState({dailyStats, weeklyStats, monthlyStats, loading: false});
  }

  toggleActiveSection = active => {
    this.setState({
      activeSection: active,
    });
  };

  render() {
    const {activeSection, dailyStats, weeklyStats, monthlyStats} = this.state;
    let data = dailyStats;
    if (activeSection == 1) data = dailyStats;
    else if (activeSection == 2) data = weeklyStats;
    else if (activeSection == 3) data = monthlyStats;

    return (
      <View style={{backgroundColor: '#F0FCFF', flex: 1}}>
        <Header title={'تقاريــــــــــر'} />
        <EmptyPadding ratio={0.025} />
        <ScrollView
          contentContainerStyle={{
            width: '100%',
            height: '100%',
          }}>
          <ReportTypeSelector
            value={activeSection}
            sections={sections}
            toggleSection={this.toggleActiveSection}
          />

          {/*
          <EmptyPadding ratio={0.025} />
          <TxtInput
            label={'عــــدد العمليــــات'}
            disabled={true}
            value={'19'}
            textAlign={'center'}
          />
          */}
          {this.state.loading ? (
            <View style={styles.emptyView}>
              <ActivityIndicator size={'large'} color={'blue'} />
            </View>
          ) : (
            <>
              <EmptyPadding ratio={0.025} />
              <TxtInput
                label={'عدد العمليات الناجحة'}
                disabled={true}
                value={data.successfulTrans}
                textAlign={'center'}
              />

              <EmptyPadding ratio={0.025} />
              <TxtInput
                label={'إجمالي المبلغ المحول'}
                leftIconTitle={'ج'}
                value={data.totalTrans}
                disabled={true}
                textAlign={'center'}
              />

              <EmptyPadding ratio={0.025} />
              <TxtInput
                label={'إجمالي التكلفــــة'}
                leftIconTitle={'ج'}
                value={data.totalCost}
                disabled={true}
                textAlign={'center'}
              />

              <EmptyPadding ratio={0.025} />
              <TxtInput
                label={'إجمالي الربـــــح'}
                leftIconTitle={'ج'}
                disabled={true}
                value={data.totalReturn}
                textAlign={'center'}
              />
              {/*
          <EmptyPadding ratio={0.025} />
          <TxtInput
            label={'إجمالي المبلغ المستقبل'}
            leftIconTitle={'ج'}
            value={'95'}
            disabled={true}
            textAlign={'center'}
          />
          */}
            </>
          )}

          <EmptyPadding ratio={0.05} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emptyView: {
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const mapStateToProps = state => {
  return {
    payment: state.payment,
  };
};

export default connect(mapStateToProps)(Reports);
//export {SignIn};
