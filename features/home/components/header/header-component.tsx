import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderSlider from './header-slider/header-slider';

const HeaderComponent = () => {

  return (
    <SafeAreaView className='gap-24 bg-pedidosYaRojo rounded-bl-3xl rounded-br-[80px] overflow-hidden pt-5'>
      <HeaderSlider />
    </SafeAreaView>
  );
};

export default HeaderComponent;
