import React from 'react';
import { ImageSourcePropType, Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

interface Props {
  id?: number;
  imgSource: ImageSourcePropType | undefined;
}

const ThirdSectionMiniCard = ({ id, imgSource }: Props) => {
  const scale = useSharedValue(1); 
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(scale.value, { duration: 150 }) }],
    opacity: withTiming(opacity.value, { duration: 150 }),
  }));

  return (
    <Pressable
      onPressIn={() => { scale.value = 0.95, opacity.value = 0.5 }}  
      onPressOut={() => { scale.value = 1, opacity.value = 1 }}   
    >
      <Animated.Image
        source={imgSource}
        className="w-[65px] h-[65px] rounded-3xl border border-gray-300"
        style={animatedStyle}
        resizeMode="contain"
      />
    </Pressable>
  );
};

export default ThirdSectionMiniCard;
