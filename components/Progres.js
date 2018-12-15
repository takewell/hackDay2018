import React from 'react';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';

const ProgressCirCle = ({ }) => {
  return (
    <View>
      <Progress.Circle showText={true} size={200} indeterminate={true} color='red' />
    </View>
  )
}

export default ProgressCirCle;
