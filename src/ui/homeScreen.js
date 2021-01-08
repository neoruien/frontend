import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";
import boxDataScreen from "./boxDataScreen.js"
import DATA  from "../../data/dummyBoxData.js";

const Item = ({ item, onPress, style, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate("boxNav", { itemId: item.id })} style={[styles.item, style]}>
    <Text style={styles.title}> {item.boxText} </Text>
  </TouchableOpacity>
);

const renderItem = ({ item }, navigation) => {
  console.log(item)
  return (<Item item={item} navigation={navigation}/>);
};

export default function homeScreen({ navigation }) { 
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title = 'Add box' onPress={() => navigation.navigate('Add box')} />
      <FlatList
        data={DATA}
        renderItem={(item) => renderItem(item, navigation)}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
