import React from 'react';
import { Image, ImageSourcePropType, Pressable, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface Props {
  id?: number;
  title: string;
  imgSource: ImageSourcePropType | undefined;
  className?: string;
}

const MiniCard = ({ title, imgSource, className = '' }: Props) => {
  const pressed = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: withTiming(pressed.value === 1 ? '#d1d5db' : '#f3f4f6', { duration: 200 }),
  }));

  return (
    <Pressable
      onPressIn={() => { pressed.value = 1; }}
      onPressOut={() => { pressed.value = 0; }}
      className={`relative rounded-3xl overflow-hidden items-center justify-center py-2 ${className}`}
    >
      <Animated.View
       className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl z-[-1]"
        style={animatedStyle}
      />
      <Image
        source={imgSource}
        className="w-full h-[80%]"
        resizeMode="contain"
      />
      <Text className="font-bold text-xl text-black">{title}</Text>
    </Pressable>
  );
};

export default MiniCard;