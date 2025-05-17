import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import MiniCard from '../mini-card/mini-card';

const data = [
    { id: 1, title: 'Helados', imgSource: require('../../../../../assets/images/slider/helados-secondary.png') },
    { id: 2, title: 'Farmacias', imgSource: require('../../../../../assets/images/slider/farmacias-secondary.png') },
    { id: 4, title: 'Bodegas', imgSource: require('../../../../../assets/images/slider/drinks-secondary.png') },
    { id: 5, title: 'Café y Postres', imgSource: require('../../../../../assets/images/slider/cafe-secondary.png') },
    {id: 6, title: 'Mascotas', imgSource: require('../../../../../assets/images/slider/mascotas-secondary.png') },
    {id: 7, title: 'Tiendas', imgSource: require('../../../../../assets/images/slider/tiendas-secondary.png') },
];

const { width: screenWidth } = Dimensions.get('window');
const cardWidth = screenWidth / 3.2;

const SecondSection = () => {
    return (
        <View className='h-48 p-0'>
            <FlatList
                horizontal
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ width: cardWidth, marginHorizontal: 9, marginVertical: 9 }}>
                        <MiniCard title={item.title} imgSource={item.imgSource} className='pb-8' />
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
