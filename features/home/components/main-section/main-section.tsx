import React from 'react';
import { View } from 'react-native';
import FifthSection from './fifth-section/fifth-section';
import FirstSection from './first-section/first-section';
import FourthSection from './fourth-section/fourth-section';
import SecondSection from './second-section/second-section';
import ThirdSection from './third-section/third-section';

const MainSection = () => {
  return (
    <View>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </View>
  )
}

export default MainSection;