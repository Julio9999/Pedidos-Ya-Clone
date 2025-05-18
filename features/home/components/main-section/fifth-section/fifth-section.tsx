import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import FifthSectionMiniCard from './mini-card/fifth-section-mini-card';

const { width } = Dimensions.get('window');

const FifthSection = () => {
    return (
        <View className='gap-6 mb-9'>
            <View className='mx-4 gap-4'>
                <Text className='font-bold text-2xl'>Descubrí estas opciones</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={Array.from([1, 2, 3, 4])}
                    horizontal
                    renderItem={({ item, index }) => (
                        <View
                            className={`h-full  flex-1   ${index < 4 - 1 ? 'mr-4' : ''}`}
                            style={{ width: width - 60 }}
                        >
                            <FifthSectionMiniCard />
                        </View>
                    )}
                    snapToAlignment="start"
                />

            </View>

            <View className='mx-4 gap-4'>
                <Text className='font-bold text-2xl'>Mismo precio que en local</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={Array.from([1, 2, 3, 4])}
                    horizontal
                    renderItem={({ item, index }) => (
                        <View
                            className={`h-full  flex-1   ${index < 4 - 1 ? 'mr-4' : ''}`}
                            style={{ width: width - 60 }}
                        >
                            <FifthSectionMiniCard />
                        </View>
                    )}
                    snapToAlignment="start"
                />

            </View>

            <View className='mx-4 gap-4'>
                <Text className='font-bold text-2xl'>Los más pedidos esta semana</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={Array.from([1, 2, 3, 4])}
                    horizontal
                    renderItem={({ item, index }) => (
                        <View
                            className={`h-full  flex-1   ${index < 4 - 1 ? 'mr-4' : ''}`}
                            style={{ width: width - 60 }}
                        >
                            <FifthSectionMiniCard />
                        </View>
                    )}
                    snapToAlignment="start"
                />

            </View>
        </View>
    )
}

export default FifthSection;