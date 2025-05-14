import React, { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface Props {
  currentIndex: number;
  total: number;
  goToSlide: (index: number) => void;
}

const SliderControls = ({ currentIndex, total, goToSlide }: Props) => {
  const activeIndex = useSharedValue(currentIndex);

  useEffect(() => {
    activeIndex.value = currentIndex;
  }, [currentIndex]);

  const animatedStyle = (index: number) => {
    return useAnimatedStyle(() => {
      return {
        width: withTiming(activeIndex.value === index ? 24 : 12, { duration: 200 }), 
        backgroundColor: withTiming(activeIndex.value === index ? 'white' : 'rgba(255, 255, 255, 0.5)', { duration: 200 }), 
      };
    }, [activeIndex]); 
  };

  return (
    <View className="flex-row mt-3 gap-3 bg-white/35 rounded-3xl mx-auto p-1">
      {Array.from({ length: total }).map((_, index) => (
        <TouchableOpacity key={index} onPress={() => goToSlide(index)}>
          <Animated.View
            style={[animatedStyle(index)]} 
            className="rounded-full h-3"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SliderControls;
