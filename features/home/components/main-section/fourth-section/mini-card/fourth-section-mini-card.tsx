import React from 'react';
import { ImageSourcePropType, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface Props {
    imgSource: ImageSourcePropType | undefined;
}

const FourthSectionMiniCard = ({ imgSource }: Props) => {


    const opacity = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
        };
    });

    const handlePressIn = () => {
        opacity.value = withTiming(0.8, { duration: 200 });
    };

    const handlePressOut = () => {
        opacity.value = withTiming(1, { duration: 200 });
    };

    return (
        <Pressable
        onPressIn={() => handlePressIn()}
        onPressOut={() => handlePressOut()}
         >
            <Animated.Image
                source={imgSource}
                className="w-full rounded-xl h-full"
                resizeMode="stretch"
                style={animatedStyle}
            />
        </Pressable>
    )
}

export default FourthSectionMiniCard;