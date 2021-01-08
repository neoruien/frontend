import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";
import DATA  from "../../data/dummyBoxData.js";

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const renderItem = ({ item }) => {

  return (
    <Item
      item={item}
      onPress={() => alert(`Box ${item.id} was pushed`)}
    />
  );
};

export default function homeScreen({ navigation }) { 
  return (
    <View style={styles.container}>
      <Button
        title = 'Add box'
        onPress={() => navigation.navigate('Add box')}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}
