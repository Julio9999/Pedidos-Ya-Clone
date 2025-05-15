import React from 'react';
import { View } from 'react-native';
import FirstSection from './first-section/first-section';
import SecondSection from './second-section/second-section';

const MainSection = () => {
  return (
    <View className='gap-3'>
      <FirstSection />
      <SecondSection />
    </View>
  )
}

export default MainSection;