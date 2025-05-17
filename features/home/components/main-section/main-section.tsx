import React from 'react';
import { View } from 'react-native';
import FirstSection from './first-section/first-section';
import SecondSection from './second-section/second-section';
import ThirdSection from './third-section/third-section';

const MainSection = () => {
  return (
    <View>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </View>
  )
}

export default MainSection;