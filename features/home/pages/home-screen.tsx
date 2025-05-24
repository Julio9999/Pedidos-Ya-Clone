import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import HeaderComponent from '../components/header/header-component';
import HeaderTop from '../components/header/header-top/header-top';
import MainSection from '../components/main-section/main-section';

const HomeScreen = () => {
  const scrollY = useSharedValue(0);
  const lastScrollY = useSharedValue(0);
  const showSearchBar = useSharedValue(true);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const currentY = event.contentOffset.y;
      const deltaY = currentY - lastScrollY.value;

      if (deltaY > 2) {
        showSearchBar.value = false;
      }

      if (deltaY < -2 && currentY > 10) {
        showSearchBar.value = true;
      }

      scrollY.value = currentY;
      lastScrollY.value = currentY;
    },
  });

  return (
    <Animated.ScrollView
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      stickyHeaderIndices={[0]}
    >
      <HeaderTop
        scrollY={scrollY}
        showSearchBar={showSearchBar}
      />
      <HeaderComponent />
      <MainSection />
    </Animated.ScrollView>
  );
};

export default HomeScreen;
