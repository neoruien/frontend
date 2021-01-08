import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";

export default function confirmAddItemScreen({ navigation, route }) { 
  console.log(route.params.image)
  return (
    <View style={styles.mainContainer}>
      <View style={styles.tallTopContainer}>
        <Image
            style={styles.bigimage}
            source={{uri: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FhackNroll-a32202a3-ee74-47d1-a77a-6cdaea88e868/Camera/42819056-26e3-4da8-9c3f-a5da3ab5c1ce.jpg'}}
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