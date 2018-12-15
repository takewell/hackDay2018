import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabBarIcon = ({ name = null }) => {
  return (
    <View>
      <MaterialCommunityIcons name={name} size={26} style={{ marginBottom: -3 }} color="darkorange" />
    </View>
  )
}

export default TabBarIcon;