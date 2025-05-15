import { View } from 'react-native';
import HeaderComponent from '../components/header/header-component';
import MainSection from '../components/main-section/main-section';

const HomeScreen = () => {
  return (
    <View className='flex-1 bg-white gap-5'>
      <HeaderComponent />
      <MainSection /> 
    </View>
  )
}

export default HomeScreen;