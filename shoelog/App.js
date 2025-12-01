import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import Screens
import HomeScreen from './src/screens/HomeScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import BrandScreen from './src/screens/BrandScreen';
import ShoeDetailScreen from './src/screens/ShoeDetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator untuk Home
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="HomeMain" 
      component={HomeScreen}
      options={{ title: 'Sepatu Terbaru' }}
    />
    <Stack.Screen 
      name="ShoeDetail" 
      component={ShoeDetailScreen}
      options={{ title: 'Detail Sepatu' }}
    />
  </Stack.Navigator>
);

// Stack Navigator untuk Categories
const CategoriesStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="CategoriesMain" 
      component={CategoriesScreen}
      options={{ title: 'Kategori' }}
    />
    <Stack.Screen 
      name="ShoeDetail" 
      component={ShoeDetailScreen}
      options={{ title: 'Detail Sepatu' }}
    />
  </Stack.Navigator>
);

// Stack Navigator untuk Brand
const BrandStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="BrandMain" 
      component={BrandScreen}
      options={{ title: 'Merek' }}
    />
    <Stack.Screen 
      name="ShoeDetail" 
      component={ShoeDetailScreen}
      options={{ title: 'Detail Sepatu' }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Categories') {
              iconName = focused ? 'grid' : 'grid-outline';
            } else if (route.name === 'Brand') {
              iconName = focused ? 'business' : 'business-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Categories" 
          component={CategoriesStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Brand" 
          component={BrandStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{ title: 'Profil' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}