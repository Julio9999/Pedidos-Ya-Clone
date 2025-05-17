import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

import '../global.css';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#000',
          tabBarStyle: {
            paddingBottom: 30,
            paddingTop: 0,
            backgroundColor: '#ffffff',
            height: 60,
            elevation: 10, 
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            borderTopWidth: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="super/index"
          options={{
            title: 'Súper',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="shopping-basket" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="sale/index"
          options={{
            title: 'Promociones',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="sale" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="orders/index"
          options={{
            title: 'Pedidos',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="receipt" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile/index"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="user" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
