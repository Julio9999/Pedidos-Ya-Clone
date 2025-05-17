import React from 'react';
import { FlatList, View } from 'react-native';
import ThirdSectionMiniCard from './mini-card/third-section-mini-card';


const data = [
    { id: 1, imgSource: require('../../../../../assets/images/slider/337ee31b-eea7-4f06-b7f3-c97fe1ffe55b.jpg') },
    { id: 2, imgSource: require('../../../../../assets/images/slider/7263808b-53e5-4c52-a1f8-97d5ab8e93c3.jpg') },
    { id: 3, imgSource: require('../../../../../assets/images/slider/bd3bb48e-d037-48ae-a61a-ec4766cd0186.jpg') },
    { id: 4, imgSource: require('../../../../../assets/images/slider/d8586d66-598a-487f-8186-73ca45034f24.png') },
    { id: 5, imgSource: require('../../../../../assets/images/slider/don-ramon-sabor-paraguayo-lillo.jpg') },
    { id: 6, imgSource: require('../../../../../assets/images/slider/don-vito-brasilia-33f1ac3f-8c5b-485a-a11f-7d16a2a264a7.jpg') },
    { id: 7, imgSource: require('../../../../../assets/images/slider/gods-pan-villa-morra.jpg') },
    { id: 8, imgSource: require('../../../../../assets/images/slider/gusto-trinidad-451a8bc5-0009-401b-a69c-1c63bb8ee4ef-logo.jpeg') },
    { id: 9, imgSource: require('../../../../../assets/images/slider/la-cocina-de-kzero.jpg') },
    { id: 10, imgSource: require('../../../../../assets/images/slider/la-pizzeria-la-italiana-acceso-sur-4bf7ac98-3bbc-4658-9775-4e59c50abf54.jpg') },
    { id: 11, imgSource: require('../../../../../assets/images/slider/la-vienesa-julio-correa.jpg') },
    { id: 12, imgSource: require('../../../../../assets/images/slider/live-509747-ae97b.jpeg') },
    { id: 13, imgSource: require('../../../../../assets/images/slider/live-522819-2de30.jpeg') },
    { id: 14, imgSource: require('../../../../../assets/images/slider/logo-alberdin-nuevo.jpg') },
    { id: 15, imgSource: require('../../../../../assets/images/slider/molas-1901.jpg') },
    { id: 16, imgSource: require('../../../../../assets/images/slider/la-vienesa-julio-correa.jpg') },
]

const ThirdSection = () => {
  return (
    <View>
      <FlatList 
        horizontal
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="mx-2">
            <ThirdSectionMiniCard imgSource={item.imgSource} id={item.id} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default ThirdSection;