import { SlideItemProps } from '@/features/home/interfaces/header/header.interface';
import { useEffect } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withTiming
} from 'react-native-reanimated';

const HeaderSliderItem = ({
    text1,
    text2,
    text3,
    buttonText,
    width,
    imgSource,
    isActive,
}: SlideItemProps) => {
    const textTranslateX = useSharedValue(-100);
    const imageTranslateX = useSharedValue(100);
    const opacity = useSharedValue(0);

    useEffect(() => {
        if (isActive) {
            textTranslateX.value = withDelay(50, withTiming(0, { duration: 200 }));
            imageTranslateX.value = withDelay(100, withTiming(0, { duration: 200 }));
            opacity.value = withTiming(1, { duration: 200 });
        } else {
            textTranslateX.value = -100;
            imageTranslateX.value = 100;
            opacity.value = 0;
        }
    }, [isActive]);

    const textStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: textTranslateX.value }],
        opacity: opacity.value,
    }));

    const imageStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: imageTranslateX.value }],
        opacity: opacity.value,
    }));

    return (
        <View style={{ width }} className="flex-row">
            <Animated.View
                style={textStyle}
                className="gap-[10px] justify-center w-[60%] pl-5 items-start py-8"
            >
                <Text className="text-white text-[14px]">{text1}</Text>
                <Text className="font-bold text-[20px] text-white">{text2}</Text>
                {text3 && (
                    <Text className="text-white font-normal text-[14px]">{text3}</Text>
                )}
                <Pressable className="bg-[#FFF] rounded-[50px] items-center justify-center p-[10px] w-[60%]">
                    <Text className="font-bold text-[12px] text-black text-center">
                        {buttonText}
                    </Text>
                </Pressable>
            </Animated.View>

            <Animated.View
                style={imageStyle}
                className="w-[40%] h-56 items-center justify-center"
            >
                <Image
                    source={imgSource}
                    className="w-full h-full rounded-[20px]"
                    resizeMode="cover"
                />
            </Animated.View>
        </View>
    );
};

export default HeaderSliderItem;
