import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";
import DATA  from "../../data/dummyBoxData.js";

const Item = ({ item, onPress, style, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate("Box data", { itemId: item.id })} style={[styles.item, style]}>
    <Text style={styles.title}> {item.boxText} </Text>
  </TouchableOpacity>
);

const renderItem = ({ item }, navigation) => {
  return (<Item item={item} navigation={navigation}/>);
};

export default function homeScreen({ navigation }) { 

  return (
    <View style={styles.mainContainer}>
      
      {/* StatusBar */}
      <StatusBar style="auto" />

      {/* Add a box button */}
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Add box')} style={styles.button}>
          <Text style={styles.buttonText}>Add a box</Text>
        </TouchableOpacity>
      </View>

      {/* My Boxes container */}
      <View style={styles.pageContainer}>
        <Text style={styles.pageContainerTitle}>My Boxes</Text>
        <FlatList
          data={DATA}
          renderItem={(item) => renderItem(item, navigation)}
          keyExtractor={(item) => item.id}
        />
      </View>

    </View>
  );
}
