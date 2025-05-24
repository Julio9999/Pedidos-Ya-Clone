import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Text, View } from 'react-native';
import Animated, {
    SharedValue,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
import SearchBarComponent from '../search-bar/search-bar';

interface Props {
    scrollY: SharedValue<number>;
    showSearchBar: SharedValue<boolean>;
}

const HeaderRop = ({ scrollY, showSearchBar }: Props) => {


    const animatedSearchBar = useAnimatedStyle(() => {
        const visible = showSearchBar.value || scrollY.value < 5;
        return {
            top: withTiming(visible ? 65 : -100, { duration: 250 }),
        };
    });


    const animatedShadow = useAnimatedStyle(() => {
        const isSearchVisible = showSearchBar.value || scrollY.value < 5;

        return {
            shadowOpacity: isSearchVisible ? 0 : 0.3,
            elevation: isSearchVisible ? 0 : 5,
            shadowColor: '#000',
            shadowRadius: 4,
            borderBottomLeftRadius: isSearchVisible ? 0 : 8,
            borderBottomRightRadius: isSearchVisible ? 0 : 8,
        };
    });



    return (
        <>
            <Animated.View className="px-5 z-10 absolute bg-pedidosYaRojo py-2 pb-5 rounded-b-lg" style={animatedSearchBar}>
                <SearchBarComponent />
            </Animated.View>
            <Animated.View
                className="justify-between flex-row items-center px-5 pt-10 pb-5 bg-pedidosYaRojo z-10"
                style={[animatedShadow, { shadowOffset: { width: 0, height: 2 } }]}
            >
                <View className="flex-row items-center gap-6 p-1">
                    <Text className="text-xl font-semibold text-white">Calle 1235</Text>
                    <Entypo name="chevron-thin-down" size={16} color="white" />
                </View>
                <View className="flex-row gap-8">
                    <Ionicons name="notifications-outline" size={24} color="white" />
                    <AntDesign name="shoppingcart" size={24} color="white" />
                </View>
            </Animated.View>
        </>
    );
};

export default HeaderRop;
