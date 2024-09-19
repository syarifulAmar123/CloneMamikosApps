import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';

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
        backgroundColor: '#1baa56',
      }}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_v1QMnOZN9cbpMukb3qw8icebfmDyY0kIQ&s',
        }}
        style={{width: 450, height: 200}}
      />
      <ActivityIndicator
        size={'large'}
        color={'white'}
        style={{marginBottom: 50}}
      />
    </View>
  );
};
export default SplashScreen;
