import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const blueColor = '#10D5D6';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blueColor,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    width: '90%',
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10
  },
  buttonText: {
    color: blueColor,
    fontSize: 20,
    fontWeight: "bold"
  }
});

const Stack = createStackNavigator();

function homeScreen({ navigation }) { 
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('details')} style={styles.button}>
        <Text style={styles.buttonText}>Add a box</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

function detailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

export default function App() {
  console.log("HI");
  return (
    <NavigationContainer>
       <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: blueColor,
            elevation: 0,
          },
          headerTitleStyle: {
            alignSelf: "center"
          },
          headerTintColor: '#fff'
        }}
      >
        <Stack.Screen name="NOT Schrödinger's Box" component={homeScreen} /> 
        <Stack.Screen name="details" component={detailsScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )

}

