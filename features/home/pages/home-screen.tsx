import React from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import HeaderComponent from '../components/header/header-component';
import HeaderTop from '../components/header/header-top/header-top';
import MainSection from '../components/main-section/main-section';

const HomeScreen = () => {

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <View className='flex-1 flex-col bg-white'>
      <HeaderTop scrollY={scrollY} />
      <Animated.ScrollView
        className='flex-1 gap-5'
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
      >
        <HeaderComponent />
        <MainSection />
      </Animated.ScrollView>
    </View>
  )
}

export default HomeScreen;