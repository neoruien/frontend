import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import ACTIONS from '../../data/actionData.js';
import { styles } from "../../stylesheets/appStyles.js";
import action from '../models/action.js';

function deleteItem(serialNum) { 
fetch('http://192.168.43.32:12345/frontend', {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Content-Length': 105,
    },
    body: JSON.stringify({
      serial_no: serialNum ,
    })
  }).then((response) => {
    return response.json()
  }).then((json) => {
      return json.result;
    })
    .catch((error) => {
      console.error(error);
    });
}

export default function itemDataScreen({ navigation, route }) { 
  return (
    <View style={styles.mainContainer}>
      <View style={styles.tallTopContainer}>
        <Image
            style={styles.bigimage}
            source={require("../../assets/Bag.jpg")}
        />
      </View>

      {/* My Boxes container */}
      <View style={styles.shortPageContainer}>
        <Text style={styles.formText}>Name:  { route.params.item.getName() }</Text>
        <Text style={styles.formText}>Description: { route.params.item.getDescription() }</Text>
        <Text style={styles.formText}>Box added to: { route.params.item.getLocation() }</Text>
        <TouchableOpacity onPress={() => {
          ACTIONS.push(new action(route.params.item.getName() + " is removed from " + route.params.item.getLocation()));
          deleteItem(route.params.item.getId())
          navigation.goBack();
        }} style={styles.buttonBorder}>
          <Text style={styles.buttonText}>Remove item</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}