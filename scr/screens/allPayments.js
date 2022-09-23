import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {connect} from 'react-redux';

import {Header, EmptyPadding} from '../components/index';
import { SearchBoxComSty } from '../styles';

function Row({item}) {
  const {paymentType, value, providerNumber, date, recipientNumber} = item;
  //console.log("Items: ", paymentType, value, date)
  let dateItem = new Date(date);

  return (
    <View style={SearchBoxComSty.cardContainer}>
      <View style={SearchBoxComSty.detailsContainer}>
        <Text style={SearchBoxComSty.details}>{providerNumber}</Text>
        <Text style={SearchBoxComSty.detailsTitle}>الرقم المرسل</Text>
      </View>
      <View style={SearchBoxComSty.detailsContainer}>
        <Text style={SearchBoxComSty.details}>{recipientNumber}</Text>
        <Text style={SearchBoxComSty.detailsTitle}> الرقم المستقبل </Text>
      </View>
      <View style={SearchBoxComSty.detailsContainer}>
        <Text style={SearchBoxComSty.details}>{value} ج</Text>
        <Text style={SearchBoxComSty.detailsTitle}> القيمــة </Text>
      </View>
      <View style={SearchBoxComSty.detailsContainer}>
        <Text style={SearchBoxComSty.details}>{dateItem.toLocaleDateString()}</Text>
        <Text style={SearchBoxComSty.detailsTitle}> التاريــــخ</Text>
      </View>
      <View style={SearchBoxComSty.detailsContainer}>
        <Text style={SearchBoxComSty.details}>{dateItem.toLocaleTimeString()}</Text>
        <Text style={SearchBoxComSty.detailsTitle}> الوقـــــت</Text>
      </View>
    </View>
  );
}
class AllPayments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderItem = ({item}) => <Row item={item} />;
  keyExtractor = item => item.paymentId;

  render() {
    return (
      <View style={{backgroundColor: '#F0FCFF', flex: 1}}>
        <Header title={'كل العمليــــات'} />
        <EmptyPadding ratio={0.025}/>
        <FlatList
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          data={this.props.processes}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={()=><EmptyPadding ratio={0.015}/>}
          initialNumToRender={5}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    processes: state.payment.processes,
  };
};

export default connect(mapStateToProps)(AllPayments);
//export {SignIn};
