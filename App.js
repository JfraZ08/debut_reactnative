// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Overview'}} />
    //     <Stack.Screen name='Details' component={DetailsScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <SafeAreaView
    style={{ flex:1}}>
      <Text>Test reactnative</Text>
    </SafeAreaView> 
  );
}



export default App;