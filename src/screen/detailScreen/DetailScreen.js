import React from 'react';
import {View, Text, StatusBar, Image, ImageBackground} from 'react-native';

const DetailScreen = ({route}) => {
  const {item} = route?.params;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#1baa56'} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ImageBackground
          source={{uri: item.gambar}}
          style={{width: '100%', height: 300, elevation: 4}}
          resizeMode="container"
        />
      </View>
      <Text
        style={{
          marginLeft: 10,
          marginTop: 30,
          fontSize: 33.5,
          color: 'black',
          fontFamily: 'PlaywriteCU-VariableFont_wght',
        }}>
        {item.jenis}
      </Text>
      <Text
        style={{
          color: 'black',
          marginLeft: 20,
          marginTop: 40,
          fontSize: 21,
        }}>
        <Text style={{fontWeight: 'bold', marginLeft: 20}}>Alamat</Text> :{' '}
        {item.alamat}
      </Text>
      <Text
        style={{color: 'black', marginTop: 5, marginLeft: 20, fontSize: 18}}>
        {item.detail}
      </Text>
      <Text
        style={{color: 'black', marginLeft: 20, marginTop: 150, fontSize: 30}}>
        Rp . {item.price}
      </Text>
      <Text
        style={{
          marginTop: 50,
          marginHorizontal: 35,
          color: 'red',
          fontSize: 15,
          fontWeight: '700',
          fontFamily: 'Roboto-ThinItalic',
        }}>
        Mamikos Tempat Mencari Hunian Terbaik Anda
      </Text>
    </View>
  );
};

export default DetailScreen;
