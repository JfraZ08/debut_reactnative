import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Button, View, Text, StyleSheet, Image, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from @expo/vector-icons
import { useFonts } from 'expo-font'; // Import useFonts from expo-font

import ButtonComponent from './components/ButtonComponent';
import SymbolsView from './components/SymbolsView';
import BombModule from './components/BombModule';
import { Home } from './components/Home';
import { StringGame } from './components/StringGameScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab =
Platform.OS === "android"
  ? createMaterialBottomTabNavigator()
  : createBottomTabNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    'SignRoverLayered': require('./assets/fonts/SignRoverLayered.ttf'),
  });

  if (!fontLoaded) {
    return null; // or a loading indicator
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} /> // Use Ionicons as tabBarIcon
            ),
          }} 
        />
        <Tab.Screen 
          name="String Game" 
          component={StringGame} 
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="game-controller" size={24} color={color} /> // Use Ionicons as tabBarIcon
            ),
          }} 
        />
        <Tab.Screen 
          name='String Button'
          component={ButtonComponent}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name='color-filter' size={24} color={color} />
            )
          }}
            
        />
        <Tab.Screen 
        name='Symbols Keyboard '
        component={SymbolsView}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='keypad-outline' size={24} color={color} />
           )
        }}
        />
        <Tab.Screen 
        name='BombModule'
        component={BombModule}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='medkit-sharp' size={24} color={color}/>
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'SignRoverLayered', // Use the font family name here
  },
});
