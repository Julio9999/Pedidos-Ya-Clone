import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import FourthSectionMiniCard from './mini-card/fourth-section-mini-card';

const data = [
  { id: 1, imgSource: require('../../../../../assets/images/fourth-section/bank-promotions-rp.webp') },
  { id: 2, imgSource: require('../../../../../assets/images/fourth-section/food-promotions-rp.webp') },
  { id: 3, imgSource: require('../../../../../assets/images/fourth-section/markets-promotions-rp.webp') },
];

const { width: screenWidth } = Dimensions.get('window');

const FourthSection = () => {
  return (
    <View className="h-36 my-6">
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View
            className={`h-full  flex-1   ${index < data.length - 1 ? 'mr-4' : ''}`}
            style={{ width: screenWidth - 50 }}
          >
            <FourthSectionMiniCard imgSource={item.imgSource} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToAlignment="start"
        snapToInterval={screenWidth - 50 + 16} 
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
};

export default FourthSection;
