import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homeScreen from "./ui/homeScreen.js";
import detailsScreen from "./ui/addBoxScreen.js"

const blueColor = '#10D5D6';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: blueColor,
          },
        }}
      >
        <Stack.Screen name="NOT Schrödinger's Box" component={homeScreen} /> 
        <Stack.Screen name="Add box" component={detailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

