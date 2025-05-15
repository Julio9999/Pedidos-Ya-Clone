import { CommonSliderItemProps } from '@/features/home/interfaces/main-section/main-section.interface';
import React from 'react';
import { Image, Text, View } from 'react-native';



const SliderItem = ({ title, width, imgSource }: CommonSliderItemProps) => {
    return (
        <View style={{ width }} className='items-center justify-center bg-gray-400 h-32'>
            <Image
                source={imgSource}
            />
            <Text>{title}</Text>
        </View>
    )
}

export default SliderItem;