import { ScrollView } from 'react-native';
import HeaderComponent from '../components/header/header-component';
import MainSection from '../components/main-section/main-section';

const HomeScreen = () => {
  return (
    <ScrollView
      className='flex-1 bg-white gap-5'
      showsHorizontalScrollIndicator={false}
    >
      <HeaderComponent />
      <MainSection />
    </ScrollView>
  )
}

export default HomeScreen;