import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from @expo/vector-icons
import { useFonts } from 'expo-font'; // Import useFonts from expo-font
import FilView from './components/FillView';
import ButtonComponent from './components/ButtonComponent';
import SymbolsView from './components/SymbolsView';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Keep Talking and Nobody Explodes</Text>
      <Image style={{
          width: 300, // Set the desired width
          height: 200, // Set the desired height
          resizeMode: 'contain', // Adjust the resizing mode
          marginBottom: 10, // Add some space below the image
        }}  source={require('./assets/images/keep-talking-game.png')} />
      <Button
        title="Vous souhaitez en voir plus"
        onPress={() => navigation.navigate('String Game')}
      />
    </View>
  );
}

function StringGameScreen() {
  return (
    <View style={styles.container}>
      <FilView />
    </View>
  );
}

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
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} /> // Use Ionicons as tabBarIcon
            ),
          }} 
        />
        <Tab.Screen 
          name="String Game" 
          component={StringGameScreen} 
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
