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
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    height: '80%',
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  topContainer: {
    position: "absolute",
    top: 0,
    height: '20%',
    width: '90%',
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    marginVertical: 10,
  },
  cardText: {
    color: blueColor,
    fontSize: 20
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
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

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
    <Text style={styles.cardText}>{item.boxText}</Text>
  </TouchableOpacity>
);

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

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "black" : "#fff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      
      {/* StatusBar */}
      <StatusBar style="auto" />

      {/* Add a box button */}
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('details')} style={styles.button}>
          <Text style={styles.buttonText}>Add a box</Text>
        </TouchableOpacity>
      </View>

      {/* My Boxes container */}
      <View style={styles.pageContainer}>
        <Text style={styles.pageContainerTitle}>My Boxes</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
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
