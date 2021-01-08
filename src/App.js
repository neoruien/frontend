import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { styles } from "../stylesheets/appStyles.js";

const blueColor = '#10D5D6';

function homeScreen({ navigation }) { 
  return (
    <View style={styles.container}>
      <Button
        title = 'Add box'
        onPress={() => navigation.navigate('details')}
      />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blueColor,
    justifyContent: "center",
    alignItems: "center"
  }
});

function detailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  console.log("HI");
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
        <Stack.Screen name="details" component={detailsScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )

}

