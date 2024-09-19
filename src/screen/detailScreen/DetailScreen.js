import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';

const DetailScreen = ({route}) => {
  const {item} = route?.params;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={{uri: item.gambar}} style={{width: 400, height: 400}} />
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
      <View style={{marginTop: 130, marginLeft: 290}}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.Bwj7f5SSDzSIh5zq-zIZVwHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          }}
          style={{width: 100, height: 100}}
        />
      </View>
    </View>
  );
};

export default DetailScreen;
