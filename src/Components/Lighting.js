import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Switch, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Slider } from '@rneui/base';


export default function Lighting() {
    const [value, setValue] = useState(0);
  return (
   <>
   <View className="bg-blue-50 p-4 rounded-[32px] flex justify-center ">
        <View className="h-32 w-32 bg-white justify-center items-center rounded-full m-auto border border-gray-500 mb-6">
            <View className="flex flex-row">
            <Text className="text-3xl text-gray-700">{value}</Text>
            <Text className="text-sm text-gray-700">%</Text>
            </View>
        </View>
        <Slider
            style={{width: 270, height: 40}}
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={value}
            onValueChange={setValue}
            minimumTrackTintColor="#1fb28a"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#b9e4c9"
        />
    </View>
    <View className=" flex flex-row gap-4 items-center justify-center py-8">
        <View className="bg-current-box w-32 h-40 rounded-[30px] flex flex-col p-6">
            <FontAwesome5 name="lightbulb" size={24} color="white" />
            <Text className="text-white text-xs mt-8">Mod</Text>
            <Text className="text-white font-bold text-md">Aydınlık</Text>
        </View>
        <View className="bg-current-box w-32 h-40 rounded-[30px] flex flex-col p-6">
            <FontAwesome5 name="lightbulb" size={24} color="white" />
            <Text className="text-white text-xs mt-8">Zaman</Text>
            <Text className="text-white font-bold text-md">Zamanlayıcı</Text>
        </View>
    </View>
   </>
  )
}
