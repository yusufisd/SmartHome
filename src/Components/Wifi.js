import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Wifi() {
  return (
   <>
   <View className="bg-blue-50 p-4 rounded-[32px] flex justify-center ">
       <Text>Wİ-Fİ</Text>
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
