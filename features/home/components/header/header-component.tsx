import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderSlider from './header-slider/header-slider';
import SearchBarComponent from './search-bar/search-bar';

const HeaderComponent = () => {
  return (
    <SafeAreaView className='gap-4 bg-pedidosYaRojo   rounded-bl-3xl rounded-br-[80px] overflow-hidden'>

      <View className='justify-between flex-row items-center px-5'>
        <View className='flex-row items-center gap-6'>
          <Text className='text-xl font-semibold text-white'>Calle 1235</Text>
          <Entypo name="chevron-thin-down" size={16} color="white" />
        </View>
        <View className='flex-row gap-8'>
          <Ionicons name="notifications-outline" size={24} color="white" />
          <AntDesign name="shoppingcart" size={24} color="white" />
        </View>
      </View>

      <View className='px-5'>
        <SearchBarComponent />
      </View>

      <HeaderSlider />
    </SafeAreaView>
  )
}

export default HeaderComponent;