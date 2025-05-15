import React from 'react';
import { View } from 'react-native';
import MiniCard from '../mini-card/mini-card';



const FirstSection = () => {
    return (
        <View className='flex-row justify-between h-48 gap-5 px-5'>
            <MiniCard 
                title='Restaurantes'
                imgSource={require('../../../../../assets/images/slider/restaurantes-primary.png')}
            />
            <MiniCard 
                title='Súper'
                imgSource={require('../../../../../assets/images/slider/mercados-primary.png')}
            />
        </View>
    )
}

export default FirstSection;