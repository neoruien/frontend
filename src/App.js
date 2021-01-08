import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const blueColor = '#10D5D6';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: blueColor,
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5
  },
  inner: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
    color: blueColor
  },
  containerTitle: {
    color: blueColor,
    fontWeight: "bold",
    fontSize: 20
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
});

const Stack = createStackNavigator();

const DATA = [
  {
    id: '1',
    title: 'Box A',
  },
  {
    id: '2',
    title: 'Box B',
  },
  {
    id: '3',
    title: 'Box C',
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

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
      
      <TouchableOpacity onPress={() => navigation.navigate('details')} style={styles.button}>
        <Text style={styles.buttonText}>Add a box</Text>
      </TouchableOpacity>

      <View style={styles.pageContainer}>
        <Text style={styles.containerTitle}>My Boxes</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
      
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

