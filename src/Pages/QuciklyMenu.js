import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Switch, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Slider } from '@rneui/base';
import Menu from '../Components/Menu';
import Lighting from '../Components/Lighting';
import Ventilation from '../Components/Ventilation';
import Wifi from '../Components/Wifi';
import Curtain from '../Components/Curtain';

const QuciklyMenu = ({ navigation, route }) => {

    const [state, setState] = useState({
        pageTitle: route.params,
        lighting: 1,
        ventilation: 0,
        wifi: 0,
        music: 0
    });
    const { pageTitle, lighting, ventilation, wifi, music } = state;


    

  return (
    <View className="flex flex-col bg-blue-bg h-screen">

        <Menu state={state} setState={setState} route={route.params}/>


        {/* content */}
        <View className="h-screen bg-white rounded-t-[40px] p-10 ">

            {/* lighting */}
            <View className={lighting ? 'block' : 'hidden'}>
                <Lighting/>
            </View>

            {/* ventilation */}
            <View className={ventilation ? 'block' : 'hidden'}>
                <Ventilation />
            </View>


            {/* ventilation */}
            <View className={wifi ? 'block' : 'hidden'}>
                <Wifi />
            </View>


            {/* curtain */}
            <View className={music ? 'block' : 'hidden'}>
                <Curtain />
            </View>





        </View>
    </View>
  )
};
export default QuciklyMenu;
