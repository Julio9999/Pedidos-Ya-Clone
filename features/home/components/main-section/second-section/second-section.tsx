import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import MiniCard from '../mini-card/mini-card';

const data = [
    { id: 1, title: 'Helados', imgSource: require('../../../../../assets/images/slider/helados-secondary.png') },
    { id: 2, title: 'Farmacias', imgSource: require('../../../../../assets/images/slider/farmacias-secondary.png') },
    { id: 4, title: 'Bodegas', imgSource: require('../../../../../assets/images/slider/drinks-secondary.png') },
    { id: 5, title: 'Café y Postres', imgSource: require('../../../../../assets/images/slider/cafe-secondary.png') },
];

const { width: screenWidth } = Dimensions.get('window');
const cardWidth = screenWidth / 3.5;

const SecondSection = () => {
    return (
        <View className='h-48 p-0'>
            <FlatList
                horizontal
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ width: cardWidth, paddingHorizontal: 4, paddingVertical: 6 }}>
                        <MiniCard title={item.title} imgSource={item.imgSource} />
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                snapToInterval={cardWidth}
                snapToAlignment="start"
            />
        </View>
    );
};

export default SecondSection;
