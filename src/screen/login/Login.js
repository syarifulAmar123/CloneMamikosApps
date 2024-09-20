import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function Login() {
  const [value, setValue] = useState('');
  const navigation = useNavigation();
  const handlerDetail = item => {
    navigation.navigate('DetailScreen', {item: item});
  };
  const HandlerSearching = () => {
    Alert.alert('Anda memilih', value);
    setValue('');
  };
  const HandlerWebbView = () => {
    navigation.navigate('Penjelasan');
  };
  const [data, setData] = useState([
    {
      gambar:
        'https://static.mamikos.com/uploads/cache/data/style/2023-08-10/6SUxWh0C-240x320.jpg',
      jenis: 'Kost Casual',
      alamat: 'Bandung',
      detail: 'K. Mandi Dalam . AC . Kloset Duduk',
      price: '1.950.000/Months',
    },
    {
      gambar:
        'https://static.mamikos.com/uploads/cache/data/style/2020-10-05/L8j0Ngma-360x480.jpg',
      jenis: 'Vvip Homestay',
      alamat: 'Ulubatu , Bali tengah',
      detail: 'Private Swimming , Deket Atlas',
      price: '3.800.000/Months',
    },
    {
      gambar:
        'https://static.mamikos.com/uploads/cache/data/style/2024-06-05/jBjcdBcY-360x480.jpg',
      jenis: 'Jack Daniles Kost & Bar',
      alamat: 'Lombok Island',
      detail: 'Private  Snorkling . K. Mandi Dalam',
      price: '7.500.000/Months',
    },
    {
      gambar:
        'https://static.mamikos.com/uploads/cache/data/style/2023-03-21/gd6fz0eJ-240x320.jpg',
      jenis: 'Alfarabbi house',
      alamat: 'Bantul , Yogyakarta',
      detail: 'Include Wifi . K .Mandi Luar',
      price: '1.500.000/Months',
    },
    {
      gambar:
        'https://static.mamikos.com/uploads/cache/data/style/2023-11-22/0Hw3nc8b-240x320.jpg',
      jenis: 'Johnson Roommate',
      alamat: 'Cirebon Jawa Barat',
      detail: 'Di tengah Kota Cirebon . Adem . AC ',
      price: '1.200.000/Months',
    },
    {
      gambar:
        'https://static.mamikos.com/uploads/cache/data/style/2023-11-06/LIrDUeoK-240x320.jpg',
      jenis: 'Barokah Kost Putra',
      alamat: 'Pare Jawa Timur , Kediri',
      detail: 'Kamar mandi Dalam . Wifi area ',
      price: '400.000/Months',
    },
    {
      gambar:
        'https://static.mamikos.com/uploads/cache/data/style/2022-12-14/QoR8sw4S.-240x320.jpg',
      jenis: 'Daniessan House',
      alamat: 'Jatibarang Indramayu',
      detail: 'K . Mandi dalam . AC . Kedap Suara',
      price: '2.500.000/Months',
    },
  ]);
  const renderItem = ({item}) => {
    return (
      <View
        style={{backgroundColor: 'white', marginHorizontal: 10, marginTop: 20}}>
        <TouchableOpacity
          style={{
            width: 250,
            height: 350,
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: 10,
            elevation: 2,
          }}
          activeOpacity={0.75}
          onPress={() => handlerDetail(item)}>
          <Image
            source={{uri: item.gambar}}
            style={{
              width: 250,
              height: 170,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
          <View style={{padding: 10}}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontFamily: 'Roboto-Medium',
                marginTop: 10,
                alignItems: 'flex-start',
              }}>
              {item.jenis}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image
                source={require('../../assets/placeholder.png')}
                style={{width: 20, height: 20}}
              />
              <Text style={{color: 'black', marginLeft: 8}}>{item.alamat}</Text>
            </View>
            <Text style={{color: 'black', marginTop: 10, marginLeft: 5}}>
              {item.detail}
            </Text>
            <Text
              style={{
                color: 'black',
                marginTop: 15,
                marginLeft: 10,
                fontSize: 21,
              }}>
              {item.price}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View style={{padding: 5, marginLeft: 10}}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qmLbEplgIgEFNFdjwPCsSpV4KtIU92hjAw&s',
          }}
          style={{width: 130, height: 70}}
        />
        <Text
          style={{
            fontFamily: 'Roboto-Bold',
            fontSize: 20,
            color: 'black',
            marginTop: 5,
          }}>
          #EnaknyaNgekos
        </Text>
        <Text
          style={{fontFamily: 'Roboto-Regular', fontSize: 14, color: 'black'}}>
          Cari & Sewa Kos Mudah
        </Text>
      </View>
      <View style={{elevation: 5}}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcOG6LQYb4ET47Te1ZxkEkTFVu0BdJWM_tpw&s',
          }}
          style={{width: 135, height: 120, marginLeft: 250, marginTop: -80}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: -15,
          borderWidth: 1,
          borderColor: 'grey',
          margin: 15,
          backgroundColor: 'white',
          elevation: 10,
        }}>
        <TouchableOpacity
          style={{margin: 10}}
          onPress={() => HandlerSearching()}>
          <Image
            source={require('../../assets/search.png')}
            style={{width: 20, height: 20, marginLeft: 10}}
          />
        </TouchableOpacity>
        <TextInput
          value={value}
          onChangeText={text => setValue(text)}
          placeholder="Mau cari kos di mana "
          style={{fontSize: 13}}
        />
      </View>
      <Text style={{color: 'grey', fontSize: 13, marginLeft: 20}}>
        Atau mau cari yang lain?
      </Text>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginTop: 5,
          borderWidth: 1,
          borderColor: 'grey',
          alignItems: 'center',
          marginHorizontal: 15,
          height: 50,
          backgroundColor: 'white',
          elevation: 5,
        }}
        activeOpacity={0.8}>
        <Image
          source={require('../..//assets/buliding.png')}
          style={{width: 30, height: 30, marginLeft: 15}}
        />
        <Text style={{marginLeft: 15, marginRight: 200}}>Apartemen</Text>
        <Image
          source={require('../../assets/right-chevron.png')}
          style={{width: 20, height: 20}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginTop: 25,
          backgroundColor: '#3c9a44',
          alignItems: 'center',
          marginHorizontal: 19,
          height: 50,
          borderRadius: 12,
          elevation: 3,
        }}
        activeOpacity={0.7}
        onPress={() => HandlerWebbView()}>
        <Text style={{color: 'white', marginLeft: 10}}>Anda Pemilik Iklan</Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'white',
            marginLeft: 120,
            width: 92,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text style={{color: 'white'}}>Masuk di sini</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        style={{flex: 1, backgroundColor: 'white'}}
      />
    </View>
  );
}
