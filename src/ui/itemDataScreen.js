import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import ACTIONS from '../../data/actionData.js';
import { styles } from "../../stylesheets/appStyles.js";
import action from '../models/action.js';

export default function itemDataScreen({ navigation }) { 
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
        <Text style={styles.formText}>Name: </Text>
        <Text style={styles.formText}>Description: </Text>
        <Text style={styles.formText}>Box added to: </Text>
        <TouchableOpacity onPress={() => {
          ACTIONS.push(new action("An item is removed"));
          navigation.navigate('Box data');
        }} style={styles.buttonBorder}>
          <Text style={styles.buttonText}>Remove item</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}