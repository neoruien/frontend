import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homeScreen from "./ui/homeScreen.js";
import addBoxScreen from "./ui/addBoxScreen.js";
import boxDataScreen from "./ui/boxDataScreen.js";
import itemDataScreen from "./ui/itemDataScreen";
import addItemScreen from "./ui/addItemScreen";
import confirmAddItemScreen from "./ui/confirmAddItemScreen";
import QRCodeScanner from "./logic/QRCodeScanner.js"
import { screenOptions } from "../constants/AppConstants";
import BottomTabNavigator from "./navigation/tabNavigator.js";

const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={ screenOptions }>
        <Stack.Screen name="NOT Schrödinger's Box" component={homeScreen} /> 
        <Stack.Screen name="Add a box" component={addBoxScreen} />
        <Stack.Screen name="Box data" component={boxDataScreen} />
        <Stack.Screen name="Item data" component={itemDataScreen} />
        <Stack.Screen name="Add an item" component={addItemScreen}/>
        <Stack.Screen name="Confirm add an item" component={confirmAddItemScreen} />
        <Stack.Screen name="QR" component={QRCodeScanner}/>
      </Stack.Navigator>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
export default App;