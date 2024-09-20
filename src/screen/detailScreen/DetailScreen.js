import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';

const DetailScreen = ({route}) => {
  const {item} = route?.params;
  return (
    <View style={{flex: 1, backgroundColor: '#2222'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#141f1d'} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{uri: item.gambar}}
          style={{width: '100%', height: 300}}
          resizeMode="container"
        />
      </View>
      <Text
        style={{
          marginLeft: 10,
          marginTop: 10,
          fontSize: 21,
          color: 'black',
          fontFamily: 'PlaywriteCU-VariableFont_wght',
        }}>
        {item.jenis}
      </Text>
      <Text style={{color: 'black', marginLeft: 10, marginTop: 30}}>
        {item.alamat}
      </Text>
      <Text style={{color: 'black', marginLeft: 10, marginTop: 5}}>
        {item.detail}
      </Text>
      <Text style={{color: 'black', marginLeft: 10, marginTop: 5}}>
        {item.price}
      </Text>
    </View>
  );
};

export default DetailScreen;
