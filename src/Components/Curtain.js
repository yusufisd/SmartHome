import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Switch, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Slider } from '@rneui/base';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Curtain() {
const [value, setValue] = useState(0);
return (
<>
    <View className="bg-blue-50 p-4 rounded-[32px] flex justify-center ">
        <View className="flex flex-col gap-3 p-2">
            <View className="flex flex-row gap-3 w-full">
                <View className="w-28 h-28 flex flex-col bg-white items-center justify-center ">
                    <MaterialCommunityIcons name="curtains" size={32} color="black" />
                    <Text className="mb-2">Perde 1</Text>
                    <View className="flex flex-row gap-2 items-center">
                        <View className="bg-blue-500 rounded-lg">
                            <Text className="p-2 text-white">Aç</Text>
                        </View>
                        <View className="bg-blue-500 rounded-lg">
                            <Text className="p-2 text-white">Kapat</Text>
                        </View>
                    </View>
                </View>
                <View className="w-28 h-28 flex flex-col bg-white items-center justify-center ">
                    <MaterialCommunityIcons name="curtains" size={32} color="black" />
                    <Text className="mb-2">Perde 2</Text>
                    <View className="flex flex-row gap-2 items-center">
                        <View className="bg-blue-500 rounded-lg">
                            <Text className="p-2 text-white">Aç</Text>
                        </View>
                        <View className="bg-blue-500 rounded-lg">
                            <Text className="p-2 text-white">Kapat</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View className="flex flex-row gap-3 w-full">
                <View className="w-28 h-28 flex flex-col bg-white items-center justify-center ">
                    <MaterialCommunityIcons name="curtains" size={32} color="black" />
                    <Text className="mb-2">Perde 3</Text>
                    <View className="flex flex-row gap-2 items-center">
                        <View className="bg-blue-500 rounded-lg">
                            <Text className="p-2 text-white">Aç</Text>
                        </View>
                        <View className="bg-blue-500 rounded-lg">
                            <Text className="p-2 text-white">Kapat</Text>
                        </View>
                    </View>
                </View>
                <View className="w-28 h-28 flex flex-col bg-white items-center justify-center ">
                    <MaterialCommunityIcons name="curtains" size={32} color="black" />
                    <Text className="mb-2">Perde 4</Text>
                    <View className="flex flex-row gap-2 items-center">
                        <View className="bg-blue-500 rounded-lg">
                            <Text className="p-2 text-white">Aç</Text>
                        </View>
                        <View className="bg-blue-500 rounded-lg">
                            <Text className="p-2 text-white">Kapat</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View className="flex flex-row gap-3 w-full">
                <View className="w-28 h-28 flex flex-col bg-white items-center justify-center ">
                    <MaterialCommunityIcons name="curtains" size={32} color="black" />
                    <Text className="mb-2">Perde 5</Text>
                    <View className="flex flex-row gap-2 items-center">
                        <View className="bg-blue-500 rounded-lg">
                            <Text className="p-2 text-white">Aç</Text>
                        </View>
                        <View className="bg-blue-500 rounded-lg">
                            <Text className="p-2 text-white">Kapat</Text>
                        </View>
                    </View>
                </View>
                <View className="w-28 h-28 flex flex-col bg-white items-center justify-center ">
                    <MaterialCommunityIcons name="curtains" size={32} color="black" />
                    <Text className="mb-2">Perde 6</Text>
                    <View className="flex flex-row gap-2 items-center">
                        <View className="bg-blue-500 rounded-lg">
                            <Text className="p-2 text-white">Aç</Text>
                        </View>
                        <View className="bg-blue-500 rounded-lg">
                            <Text className="p-2 text-white">Kapat</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </View>
</>
)
}
