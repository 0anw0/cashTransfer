import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {SearchBoxComSty} from '../styles/index';

function SearchTableRow({item}) {
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
        <Text style={SearchBoxComSty.details}>{dateItem.toLocaleString()}</Text>
        <Text style={SearchBoxComSty.detailsTitle}> التاريــــخ</Text>
      </View>
    </View>
  );
}

function ResultBox(props) {
  const {sKey} = props;

  const renderItem = ({item}) => <SearchTableRow item={item} />;
  const keyExtractor = item => item.paymentId;

  return props.results.length > 0 ? (
    <View style={SearchBoxComSty.container}>
      <FlatList
        data={props.results}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  ) : (
    <View style={SearchBoxComSty.emptyResultContainer}>
      <Text style={SearchBoxComSty.emptyResultLabel}>لا يوجد نتائج</Text>
    </View>
  );
}

export {ResultBox};
