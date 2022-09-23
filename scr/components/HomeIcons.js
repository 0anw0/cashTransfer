import React, {useMemo} from 'react';
import {Text, TouchableOpacity, FlatList} from 'react-native';

import {homeIcons} from '../styles/index';

function HomeIcons(props) {
  const renderItem = ({item}) =>
    (props.numbers.length > 0 || item.initState) && (
      <TouchableOpacity
        style={homeIcons.iconContainer}
        onPress={() => props.navigate(item.screenName)}>
        <Text style={homeIcons.iconTitle}>{item.screenTitle}</Text>
      </TouchableOpacity>
    );

  const _renderItem = useMemo(() => renderItem, [homeIcons, props.numbers]);

  const keyExtractor = item => item.screenId;
  return (
    <FlatList
      data={props.iconSet}
      renderItem={_renderItem}
      contentContainerStyle={homeIcons.container}
      numColumns={2}
      keyExtractor={keyExtractor}
    />
  );
}

export default React.memo(HomeIcons, (prev, next) =>
  prev != next ? false : true,
);
