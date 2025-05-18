import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import React from 'react';
import { Image, Text, View } from 'react-native';


const FifthSectionMiniCard = () => {
    return (
        <View className='gap-6  h-64' >
            <View className='h-[65%] rounded-lg' >
                <Image
                    source={require('./../../../../../../assets/descubri/header-nacionsushi-hw6isa.webp')}
                    className='w-full h-full rounded-xl'
                    resizeMode='stretch'
                />
            </View>
            <View className='flex-row gap-4 h-[35%]'>
                <Image
                    source={require('../../../../../../assets/images/slider/337ee31b-eea7-4f06-b7f3-c97fe1ffe55b.jpg')}
                    className='w-16 h-16 rounded-xl border border-gray-300'
                    resizeMode='stretch'
                />
                <View className='flex-col flex-1'>
                    <View className='flex-row justify-between'>
                        <Text className='font-bold text-lg'>Gringos Tex Mex Py</Text>
                        <View className='flex-row items-center gap-2'>
                            <AntDesign name="star" size={20} color="black" />
                            <Text className='font-bold text-lg'>3.9</Text>
                        </View>
                    </View>
                    <View className='flex-row gap-2'>
                        <View className='flex-row items-center gap-2'>
                            <SimpleLineIcons name="clock" size={14} color="black" />
                            <Text>60-80 min</Text>
                        </View>
                        <Text>.</Text>
                        <View className='flex-row items-center gap-2'>
                            <MaterialCommunityIcons name="motorbike" size={20} color="black" />
                            <Text>Gs. 30000</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FifthSectionMiniCard;