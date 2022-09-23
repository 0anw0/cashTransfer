import React from 'react';
import {StyleSheet, Text,View} from 'react-native';
import {HeaderSty} from '../styles/index';

function Header({LeftIcon, RightIcon, onPress, title}) {
  return (
    <View style={[HeaderSty.container]}>
      <View style={styles.left}>{LeftIcon && LeftIcon}</View>
      <View onPress={onPress} style={styles.center}>
        <Text style={HeaderSty.headerTitle}>{title}</Text>
      </View>
      <View style={styles.left}>{RightIcon && RightIcon}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  left: {width: '20%'},
  center: {width: '60%', justifyContent: 'center', alignItems: 'center'},
  right: {width: '20%'},
});

export default React.memo(Header, (prev, next) =>
  prev != next ? false : true,
);
