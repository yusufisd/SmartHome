import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Switch, TouchableOpacity } from 'react-native';
import person from '../../assets/images.png';
import Entypo from '@expo/vector-icons/Entypo';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const HomePage = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [floor,setFloor] = useState('Oturma Odası')
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };
  return (
    <View className="flex flex-col bg-blue-bg h-screen">

      {/* Page Header */}
      <View className="mb-8 flex flex-row justify-between w-full bg-white h-40 rounded-b-[34] border border-black py-6 px-8">
        {/* First column */}
        <View>
          <Text className="mb-3 text-current-text">Mayıs 24, 2024</Text>
          <Text className="mb-2 text-3xl font-bold">Akıllı Ev </Text>
          <Text ><Entypo name="dot-single" size={24} color="lightgreen"/>4 cihaz aktif kullanılıyor</Text>
        </View>
        {/* Second column */}
        <View>
          <Image source={person} className="h-20 w-20 items-end"/>
        </View>
      </View>

      {/* Slide Title*/}
      <View className="h-12">
        <ScrollView horizontal className="px-10 flex flex-row gap-10">
          <TouchableOpacity onPress={() => setFloor('Bodrum Kat')}>
            <Text className={ floor == 'Bodrum Kat' ? 'text-current-title text-md font-bold' : 'text-title-text text-md font-bold'}>Bodrum Kat</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFloor('Zemin Kat')}>
            <Text className={ floor == 'Zemin Kat' ? 'text-current-title text-md font-bold' : 'text-title-text text-md font-bold'}>Zemin Kat</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFloor('Birinci Kat')}>
            <Text className={ floor == 'Birinci Kat' ? 'text-current-title text-md font-bold' : 'text-title-text text-md font-bold'}>Birinci Kat</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Content*/}
      <ScrollView >
      <View className="flex flex-col p-6 mb-14">
        {/* first row*/}
        <View className="flex flex-row gap-6 w-full mb-6">


          {/* first columnd*/}
          <TouchableOpacity onPress={() => navigation.navigate('QuciklyMenu', floor)}>
          <View className="w-40 h-36 bg-white rounded-lg flex flex-col ">
            <View className="flex flex-row justify-center p-6 items-center">
              <FontAwesome5 name="lightbulb" size={24} color="black" />
            </View>
            <Text className="px-4 font-bold text-sm">Işıklandırmalar</Text>
            <Text className="px-4">Işık 2</Text>
          </View>
          </TouchableOpacity>

          {/* second columnd*/}
          <View className="w-40 h-36 bg-white rounded-lg flex flex-col ">
            <View className="flex flex-row justify-center p-6 items-center">
              <Entypo name="tv" size={24} color="black" />
              
            </View>
            <Text className="px-4 font-bold text-sm">Akıllı TV</Text>
            <Text className="px-4">Vestel</Text>
          </View>
        </View>
        {/* second row*/}
        <View className="flex flex-row gap-6 w-full mb-6">
          {/* first columnd*/}
          <View className="w-40 h-36 bg-white rounded-lg flex flex-col ">
            <View className="flex flex-row justify-center p-6 items-center">
            <MaterialIcons name="router" size={24} color="black" />
            </View>
            <Text className="px-4 font-bold text-sm">Wi-Fİ Dağıtıcı</Text>
            <Text className="px-4">TP Link</Text>
          </View>
          {/* first columnd*/}
          <View className="w-40 h-36 bg-white rounded-lg flex flex-col ">
            <View className="flex flex-row justify-center p-6 items-center">
            <FontAwesome name="video-camera" size={24} color="black" />
            </View>
            <Text className="px-4 font-bold text-sm">CCTV</Text>
            <Text className="px-4">Güvenlik Kamerası</Text>
          </View>
        </View>

        <View className="flex flex-row gap-6 w-full mb-6">
          {/* first columnd*/}
          <View className="w-40 h-36 bg-white rounded-lg flex flex-col ">
            <View className="flex flex-row justify-center p-6 items-center">
              <MaterialCommunityIcons name="curtains" size={24} color="black" />
            </View>
            <Text className="px-4 font-bold text-sm">Perdeler</Text>
            <Text className="px-4">Perde 2</Text>
          </View>
          {/* second columnd*/}
          <View className="w-40 h-36 bg-white rounded-lg flex flex-col ">
            <View className="flex flex-row justify-center p-6 items-center">
              <Entypo name="air" size={24} color="black" />
            </View>
            <Text className="px-4 font-bold text-sm">Havalandırma</Text>
            <Text className="px-4">Klima 1</Text>
          </View>
        </View>
      </View>
      </ScrollView>




    </View>
  )
}

export default HomePage
