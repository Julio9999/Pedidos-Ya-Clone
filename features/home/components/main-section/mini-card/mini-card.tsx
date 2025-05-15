import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';

interface Props {
    id?: number;
    title: string;
    imgSource: ImageSourcePropType | undefined;
}

const MiniCard = ({ title, imgSource }: Props) => {
    return (
        <View className='items-center justify-center bg-gray-100 rounded-3xl flex-1 py-2'>
            <Image
                source={imgSource}
                className="w-[80%] h-[80%]"
            />
            <Text className='font-bold text-xl'>{title}</Text>
        </View>
    )
}

export default MiniCard;