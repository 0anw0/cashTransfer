import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {ReportTypeComSty} from '../styles/index';

function ReportTypeSelector({sections, value = 1, toggleSection}) {
  const [active = value, setActive] = useState();

  const toggleActiveSection = active => {
    setActive(active);
    toggleSection(active);
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={ReportTypeComSty.container}>
        {sections.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleActiveSection(item.id)}
            style={[
              ReportTypeComSty.section,
              active == item.id
                ? ReportTypeComSty.selected
                : ReportTypeComSty.unselected,
            ]}>
            <Text
              style={[
                ReportTypeComSty.title,
                active == item.id
                  ? ReportTypeComSty.selectedTitle
                  : ReportTypeComSty.unselectedTitle,
              ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export {ReportTypeSelector};
