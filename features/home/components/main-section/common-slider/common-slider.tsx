import { CommonSliderItemProps } from '@/features/home/interfaces/main-section/main-section.interface';
import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import SliderItem from './slider-item';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const data: CommonSliderItemProps[] = [
    {
        id: 1,
        title: 'Item 1',
        imgSource: require('../../../../../assets/images/hero/hero-6.png'),
    },
    {
        id: 2,
        title: 'Item 2',
        imgSource: require('../../../../../assets/images/hero/hero-6.png'),

    },
    {
        id: 3,
        title: 'Item 3',
        imgSource: require('../../../../../assets/images/hero/hero-6.png'),
    },
]

const CommonSlider = () => {
    return (
        <View className='relative'>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item: { title, imgSource, id } }) => (
                    <SliderItem 
                        id={id}
                        title={title}
                        width={SCREEN_WIDTH}
                        imgSource={imgSource}
                    />
                )}
                snapToInterval={SCREEN_WIDTH}
                decelerationRate="fast"
                snapToAlignment="start"
                keyExtractor={(item) => item.id.toString()}
                getItemLayout={(_, index) => ({
                    length: SCREEN_WIDTH,
                    offset: SCREEN_WIDTH * index,
                    index,
                })}
            />

        </View>
    )
}

export default CommonSlider;