import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Image, ActivityIndicator, Text, StatusBar} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 4000);
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32cc36',
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#32cc36'} />
      <Image
        source={require('../../assets/Frame1.png')}
        style={{width: 300, height: 200}}
      />
      <Text
        style={{
          color: 'white',
          fontSize: 70,
          fontFamily: 'Roboto- Bold',
          marginTop: -60,
        }}>
        mamikos
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 25,
          fontFamily: 'Roboto- Bold',
          marginTop: -10,
        }}>
        #EnaknyaNgekos
      </Text>
      <ActivityIndicator
        size={'large'}
        color={'white'}
        style={{marginTop: 190}}
      />
      <Text style={{marginTop: 230}}>Aplikasi Anak Kos No. 1 di Indoneisa</Text>
    </View>
  );
};
export default SplashScreen;
