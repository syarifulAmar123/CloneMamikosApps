import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const DetailScreen = ({route, navigation}) => {
  const {item} = route?.params;
  return (
    <View style={{flex: 1, backgroundColor: '#eeeeee'}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#1baa56'} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ImageBackground
          source={{uri: item.gambar}}
          style={{width: '100%', height: 400, borderRadius: 20}}
          resizeMode="container">
          <TouchableOpacity
            style={{flexDirection: 'row', margin: 15}}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/back.png')}
              style={{width: 35, height: 35}}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <Text
        style={{
          marginLeft: 10,
          marginTop: 30,
          fontSize: 25,
          color: 'black',
          fontFamily: 'Roboto-Regular',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        {item.jenis}
      </Text>
      <Text
        style={{
          color: 'black',
          marginLeft: 20,
          marginTop: 50,
          fontSize: 18,
        }}>
        <Text style={{fontWeight: 'bold', marginLeft: 20}}>Alamat : {''}</Text>
        {item.alamat}
      </Text>
      <Text
        style={{
          color: 'black',
          marginTop: 10,
          marginLeft: 20,
          fontSize: 20,
          // textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Fasilitas: {''}
        <Text style={{color: 'black', fontWeight: '400', fontSize: 17}}>
          {item.detail}
        </Text>
      </Text>
      <Text
        style={{color: 'black', marginLeft: 20, marginTop: 120, fontSize: 30}}>
        Rp. {item.price}
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
