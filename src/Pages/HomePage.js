import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Switch, TouchableOpacity } from 'react-native';
import person from '../../assets/images.png';
import Entypo from '@expo/vector-icons/Entypo';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const HomePage = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);

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
          <Text className=" text-current-title text-md font-bold">Oturma Odası</Text>
          <Text className=" text-title-text text-md font-bold">Mutfak</Text>
          <Text className=" text-title-text text-sm font-bold">Misafir Odası</Text>
          <Text className=" text-title-text text-sm font-bold">Yemek Odası</Text>
          <Text className=" text-title-text text-md font-bold">Oturma Odası</Text>
          <Text className=" text-title-text text-md font-bold">Mutfak</Text>
          <Text className=" text-title-text text-sm font-bold">Misafir Odası</Text>
          <Text className=" text-title-text text-sm font-bold">Yemek Odası</Text>
        </ScrollView>
      </View>

      {/* Content*/}
      <View className="flex flex-col p-6 mb-14">
        {/* first row*/}
        <View className="flex flex-row gap-6 w-full mb-6">
          {/* first columnd*/}
          <View className="w-40 h-40 bg-white rounded-lg flex flex-col ">
            <View className="flex flex-row justify-between p-6 items-center">
              <FontAwesome5 name="lightbulb" size={24} color="black" />
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <Text className="px-4 font-bold text-sm">Işıklandırmalar</Text>
            <Text className="px-4">Işık 2</Text>
          </View>
          {/* second columnd*/}
          <View className="w-40 h-40 bg-white rounded-lg flex flex-col ">
            <View className="flex flex-row justify-between p-6 items-center">
              <Entypo name="tv" size={24} color="black" />
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <Text className="px-4 font-bold text-sm">Akıllı TV</Text>
            <Text className="px-4">Vestel</Text>
          </View>
        </View>
        {/* second row*/}
        <View className="flex flex-row gap-6 w-full">
          {/* first columnd*/}
          <View className="w-40 h-40 bg-white rounded-lg flex flex-col ">
            <View className="flex flex-row justify-between p-6 items-center">
            <MaterialIcons name="router" size={24} color="black" />
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <Text className="px-4 font-bold text-sm">Wi-Fİ Dağıtıcı</Text>
            <Text className="px-4">TP Link</Text>
          </View>
          {/* first columnd*/}
          <View className="w-40 h-40 bg-white rounded-lg flex flex-col ">
            <View className="flex flex-row justify-between p-6 items-center">
            <FontAwesome name="video-camera" size={24} color="black" />
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <Text className="px-4 font-bold text-sm">CCTV</Text>
            <Text className="px-4">Güvenlik Kamerası</Text>
          </View>
        </View>
      </View>

      {/* Footer*/}
      <View className="bg-current-box h-24 rounded-t-[34] border justify-between pr-8 items-center flex flex-row border-black ">
        <View className="flex flex-col p-5">
          <Text className="text-white text-lg font-bold">Hızlı Uzaktan Erişim Seçenekleri</Text>
          <Text className="text-white">Uzaktan erişim seçenekleri için butona tıklayınız.</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('QuciklyMenu')}>
          <FontAwesome name="arrow-circle-right" size={44} color="white" />
        </TouchableOpacity>
      </View>




    </View>
  )
}

export default HomePage
