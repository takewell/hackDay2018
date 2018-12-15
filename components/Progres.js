import React from 'react';
import { View, Text } from 'react-native';
import * as Progress from 'react-native-progress';

const ProgressCirCle = ({ }) => {
  return (
    <View>
      <Progress.Circle showsText={true} textStyle="hogehoge" size={200} indeterminate={true} color='red' >
      </Progress.Circle>
    </View>
  )
}

export default ProgressCirCle;
