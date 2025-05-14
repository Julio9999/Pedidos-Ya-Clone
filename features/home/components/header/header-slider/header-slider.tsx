import { SlideItemProps } from '@/features/home/interfaces/header/header.interface';
import { useRef, useState } from 'react';
import { Dimensions, FlatList, NativeScrollEvent, NativeSyntheticEvent, View } from 'react-native';
import HeaderSliderItem from './header-slider-item';
import SliderControls from './slider-controls';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const data: SlideItemProps[] = [
    {
        id: 1,
        text1: '¿Antojo de algo dulce?',
        text2: 'Disfrutá la tarde pidiendo tu helado favorito',
        buttonText: 'Buscar heladerias',
        imgSource: require('../../../../../assets/images/hero/hero-6.png'),
    },
    {
        id: 2,
        text1: 'Exclusivo con Itaú y Plus',
        text2: '30% OFF y envío gratis',
        text3: 'Aprovecha estos descuentos todos los días',
        buttonText: 'Mostrar descuentos',
        imgSource: require('../../../../../assets/images/hero/hero-117.png'),
    },
    {
        id: 3,
        text1: 'Exclusivo con Itaú y Plus',
        text2: 'Almorza con 10% OFF',
        text3: 'Retirá tu almuerzo y ahorrate la espera.',
        buttonText: 'Descubrir locales',
        imgSource: require('../../../../../assets/images/hero/hero-33.png'),
    },
]

const HeaderSlider = () => {

    const flatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX / SCREEN_WIDTH);
        setCurrentIndex(index);
    };

    const goToSlide = (index: number) => {
        flatListRef.current?.scrollToIndex({ index, animated: true });
        setCurrentIndex(index);
    };


    return (
        <View className='relative'>
            <FlatList
                ref={flatListRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                onScroll={handleScroll}
                renderItem={({ item: { text1, text2, text3, buttonText, imgSource, id }, index }) => (
                    <HeaderSliderItem
                        id={id}
                        text1={text1}
                        text2={text2}
                        text3={text3}
                        buttonText={buttonText}
                        width={SCREEN_WIDTH}
                        imgSource={imgSource}
                        isActive={index === currentIndex}
                    />
                )}
                snapToInterval={SCREEN_WIDTH}
                decelerationRate="fast"
                snapToAlignment="start"
                keyExtractor={(item) => item.id.toString()}
                getItemLayout={(_, index) => ({
                    length: SCREEN_WIDTH,
                    offset: SCREEN_WIDTH * index,
                    index,
                })}
            />
            <View className='absolute bottom-3 w-full'>
                <SliderControls
                    currentIndex={currentIndex}
                    goToSlide={goToSlide}
                    total={data.length}
                />
            </View>
        </View>
    )
}

export default HeaderSlider;