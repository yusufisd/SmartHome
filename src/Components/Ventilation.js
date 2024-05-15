import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Switch, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Slider } from '@rneui/base';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Ventilation() {
    const [value, setValue] = useState(0);
    const [isFan,setIsFan] = useState(0);
    const [isClima,setIsClima] = useState(0);
    const [isOn,setIsOn] = useState(false);
  return (
    <>
    <TouchableOpacity onPress={() => {setIsOn(!isOn), setIsClima(!isClima), setIsFan(!isFan)}}>
        <View className={ isOn ? 'rounded-full bg-current-box border border-current-box m-auto p-4 mb-8' : 'rounded-full border border-gray-600 m-auto p-4 mb-8'}>
            <AntDesign name="poweroff" size={24} color={ isOn ? 'white' : 'black'} />
        </View>
    </TouchableOpacity>
    


   <View className="bg-blue-50 p-4 rounded-[32px] flex justify-center mb-3">
        <View className="h-12 w-28 bg-white justify-center items-center rounded-lg m-auto border border-gray-200 mb-2">
            <View className="flex flex-row">
            <Text className="text-3xl text-gray-700">{value}</Text>
            <Text className="text-md text-gray-700">'C</Text>
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


   
    <View className=" flex flex-row mb-3 justify-center gap-4">
        <TouchableOpacity onPress={() => setIsFan(1)}>
            <View className={ isFan ? "bg-current-box p-4 rounded-lg " : "p-4 rounded-lg border border-gray-700"}>
                <FontAwesome5 name="snowflake" size={30} color={ isFan ? 'white' : 'black'} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsFan(2)}>
            <View className={ isFan == 2 ? "bg-current-box p-4 rounded-lg " : "p-4 rounded-lg border border-gray-700"}>
                <MaterialCommunityIcons name="fan" size={30} color={ isFan == 2 ? 'white' : 'black'} />
            </View>
        </TouchableOpacity>
    </View>



    <View className="flex flex-row gap-4 items-center justify-center py-8">
        <View className="flex flex-col border border-gray-700 rounded-lg p-4" >
            <Text className="font-bold text-sm">OTURMA ODASI</Text>
            <View className="flex flex-row justify-between">
                <Text>Derece</Text>
                <Text className="text-red">25'</Text>
            </View>
            <View className="flex flex-row justify-between">
                <Text>Nem</Text>
                <Text className="text-red">60%</Text>
            </View>
        </View>
        <View className="flex flex-col border border-gray-700 rounded-lg p-4" >
            <Text className="font-bold text-sm">YATAK ODASI</Text>
            <View className="flex flex-row justify-between">
                <Text>Derece</Text>
                <Text className="text-red">25'</Text>
            </View>
            <View className="flex flex-row justify-between">
                <Text>Nem</Text>
                <Text className="text-red">60%</Text>
            </View>
        </View>
    </View>
   </>
  )
}
