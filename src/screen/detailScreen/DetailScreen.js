import React from 'react';
import {View, Text} from 'react-native';

const DetailScreen = ({route}) => {
  const {item} = route?.params;
  return (
    <View>
      <Text>{item.alamat}</Text>
    </View>
  );
};

export default DetailScreen;
