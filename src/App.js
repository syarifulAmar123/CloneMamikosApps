import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './screen/splashscreen/SplashScreen';
import {Login} from './screen/login/Login';
import DetailScreen from './screen/detailScreen/DetailScreen';
import Penjelasan from './screen/penjelasan/Penjelasan';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="Penjelasan" component={Penjelasan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
