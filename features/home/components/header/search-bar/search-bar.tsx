import Fontisto from '@expo/vector-icons/Fontisto';
import React from 'react';
import { TextInput, View } from 'react-native';

const SearchBarComponent = () => {
    return (
        <View className='bg-white rounded-full  mt-4 flex-row items-center justify-between w-full px-1 py-1'>
            <TextInput placeholder='Locales, platos y productos' className='pl-2 font-medium' />
            <Fontisto name="search" size={20} color="white" className='bg-pedidosYaRojo p-3 rounded-full rotate-90' />
        </View>
    )
}

export default SearchBarComponent;