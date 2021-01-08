import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";

export default function confirmAddItemScreen({ navigation }) { 
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
        <Text style={styles.formText}>Box to add to: </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Box data')} style={styles.buttonBorder}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}