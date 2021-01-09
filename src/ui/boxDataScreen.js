import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";
import item from '../models/item.js';

const Item = ({ item, onPress, style, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate("Item data", { itemId: item.getId() })} style={[styles.card, style]}>
    <Image
        style={styles.image}
        source={require("../../assets/order.png")}
      />
    <Text style={styles.cardText}> {item.getName()} </Text>
  </TouchableOpacity>
);

const renderItem = ({ item }, navigation) => {
  return (<Item item={item} navigation={navigation}/>);
};

function getDataFromSever() {
  return (fetch('http://192.168.43.32:12345/frontend', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Content-Length': 105,
    },
    body: JSON.stringify({
      key: 'key',
      type: 1
    })
  }).then((response) => {
    return response.json()
  }).then((json) => {
      console.log(json.result)
      return json.result;
  }).catch((error) => {
      console.error(error);
  }));
}

function getItems() { 
  const rawData = getDataFromSever();
  console.log(rawData);
  // return rawData.map((rawData) -> new item()
}

export default function boxDataScreen({ route, navigation }) { 
  const items = getItems();
  return (
    <View style={styles.mainContainer}>
      
      {/* StatusBar */}
      <StatusBar style="auto" />

      {/* Add a box button */}
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Add an item')} style={styles.button}>
          <Text style={styles.buttonText}>Add an item</Text>
        </TouchableOpacity>
      </View>

      {/* My Items container */}
      <View style={styles.pageContainer}>
        <Text style={styles.pageContainerTitle}>My Items in { route.params.boxName }</Text>
        <FlatList
          data={DATA}
          renderItem={(item) => renderItem(item, navigation)}
          keyExtractor={(item) => item.getId().toString()}
        />
      </View>

    </View>
  );
}
