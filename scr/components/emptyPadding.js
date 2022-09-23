import React from 'react';
import {View} from 'react-native';
import {screenHeight} from '../config/index';

function EmptyPadding({ratio}) {
  let r = ratio || 0.01;

  return <View style={{paddingTop: screenHeight * r}}></View>;
}

//export { EmptyPadding };
export default React.memo(EmptyPadding, (p, n) => (p != n ? false : true));
