import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";

export default function addBoxScreen({ navigation }) { 
  return (
    <View style={styles.container}>
      <Image
        style={styles.bigimage}
        source={require("../../assets/Bag.jpg")}
      />

      {/* Add a box button */}
      <TouchableOpacity onPress={() => navigation.navigate('Add an item')} style={styles.buttonBorder}>
          <Text style={styles.buttonText}>Take photo</Text>
      </TouchableOpacity>

    </View>
  );
}