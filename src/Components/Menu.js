import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Switch, TouchableOpacity,Button  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Slider } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const Menu = ({state,setState}) =>  {
    const navigation = useNavigation();


  return (
    <>
      {/* Page title */}
      <View className="flex flex-row items-center w-full p-6">
            <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                <Ionicons name="chevron-back-outline" className="" size={24} color="black" />
            </TouchableOpacity>
            <Text className="justify-center text-xl font-bold m-auto">{state.pageTitle}</Text>
        </View>

        {/* Page title boxes */}
        <View className="h-48">
        <View className="h-40 ">
            <ScrollView horizontal className="flex flex-row p-4  gap-4 h-32">
                {/* boxes */}

                <View className="flex flex-col gap-2">
                    <TouchableOpacity onPress={() => {setState({pageTitle:"Işıklandırma",lighting:1,ventilation:0,wifi:0,music:0})}}>
                        <View className={ state.lighting ? 'bg-current-box rounded-lg items-center p-4 h-20 w-20 ' : 'bg-white rounded-lg items-center p-4 h-20 w-20'}>
                            <View className="p-3">
                                <FontAwesome5 name="lightbulb" size={18} color={ state.lighting ? 'white': 'black'} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View className="justify-center flex flex-row">
                        <Text className="">Işıklandırma</Text>
                    </View>
                </View>


                <View className="flex flex-col gap-2 ">
                    <TouchableOpacity onPress={() => {setState({pageTitle:"Havalandırma",lighting:0,ventilation:1,wifi:0,music:0})}}>
                    <View className={ state.ventilation ? 'bg-current-box rounded-lg items-center p-4 h-20 w-20 ' : 'bg-white rounded-lg items-center p-4 h-20 w-20'}>
                        <View className="p-3">
                            <FontAwesome5 name="lightbulb" size={18} color={ state.ventilation ? 'white': 'black'} />
                        </View>
                    </View>
                    </TouchableOpacity>
                    <View className="justify-center flex flex-row cursor-pointer">
                        <Text className="">Havalandırma</Text>
                    </View>
                </View>

                <View className="flex flex-col gap-2">
                    <TouchableOpacity onPress={() => {setState({pageTitle:"Wi-Fi",lighting:0,ventilation:0,wifi:1,music:0})}}>
                        <View className={ state.wifi ? 'bg-current-box rounded-lg items-center p-4 h-20 w-20 ' : 'bg-white rounded-lg items-center p-4 h-20 w-20'}>
                            <View className="p-3">
                                <FontAwesome5 name="lightbulb" size={18} color={ state.wifi ? 'white': 'black'} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View className="justify-center flex flex-row">
                        <Text className="">Wi-Fi</Text>
                    </View>
                </View>

                <View className="flex flex-col gap-2">
                    <TouchableOpacity onPress={() => {setState({pageTitle:"Müzik",lighting:0,ventilation:0,wifi:0,music:1})}}>
                        <View className={ state.music ? 'bg-current-box rounded-lg items-center p-4 h-20 w-20 ' : 'bg-white rounded-lg items-center p-4 h-20 w-20'}>
                            <View className="p-3">
                                <FontAwesome5 name="lightbulb" size={18} color={ state.music ? 'white': 'black'} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View className="justify-center flex flex-row">
                        <Text className="">Müzik</Text>
                    </View>
                </View>

                

                
            </ScrollView>
        </View>
        </View>
    </>
  )
};
export default Menu;
