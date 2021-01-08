import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Card, Avatar, IconButton } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const blueColor = '#10D5D6';
const lightBlueColor = '#CFF7F7'

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: blueColor,
    justifyContent: "center",
    alignItems: "center"
  },
  pageContainerTitle: {
    color: blueColor,
    fontWeight: "bold",
    fontSize: 20,
    borderBottomColor: lightBlueColor,
    borderBottomWidth: 5,
    paddingBottom: 5
  },
  pageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    height: '50%',
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  card: {
    backgroundColor: 'pink',
  },
  cardText: {
    color: blueColor
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
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

const DATA = [
  {
    id: '1',
    boxText: 'Box A',
  },
  {
    id: '2',
    boxText: 'Box B',
  },
  {
    id: '3',
    boxText: 'Box C',
  },
];

function homeScreen({ navigation }) { 

  return (
    <View style={styles.mainContainer}>
      
      {/* StatusBar */}
      <StatusBar style="auto" />

      {/* Add a box button */}
      <TouchableOpacity onPress={() => navigation.navigate('details')} style={styles.button}>
        <Text style={styles.buttonText}>Add a box</Text>
      </TouchableOpacity>

      {/* My Boxes container */}
      <View style={styles.pageContainer}>
        <Text style={styles.pageContainerTitle}>My Boxes</Text>
      </View>

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

