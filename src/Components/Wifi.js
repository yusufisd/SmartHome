import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Wifi() {
  return (
   <>
   <View className="bg-blue-50 p-4 rounded-[32px] flex justify-center w-full ">
       <Text className="items-center w-full justify-center">Wİ-Fİ</Text>
    </View>
    <View className=" flex flex-row gap-4 items-center justify-center py-8">
        <View className="bg-current-box w-32 h-40 rounded-[30px] flex flex-col p-6">
            <Text className="text-white text-lg items-center mt-8">Aç</Text>
        </View>
        <View className="bg-current-box w-32 h-40 rounded-[30px] flex flex-col p-6">
            <Text className="text-white text-lg items-center mt-8">Kapat</Text>
        </View>
    </View>
   </>
  )
}
