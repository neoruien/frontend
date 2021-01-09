import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";
import ACTIONS  from "../../data/actionData.js";

const Item = ({ item, style }) => (
  <View style={styles.card}>
    <Text style={styles.cardText}> {item.getDescription()} </Text>
  </View>
);

const renderItem = ({ item }) => {
  return (<Item item={item}/>);
};

export default function notificationScreen({ navigation }) { 

  return (
    <View style={styles.mainContainer}>
      
      {/* StatusBar */}
      <StatusBar style="auto" />

      {/* Actions container */}
      <View style={styles.tallPageContainer}>
        <Text style={styles.pageContainerTitle}>Actions</Text>
        <FlatList
          data={ACTIONS}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item) => item.getId().toString()}
        />
      </View>

    </View>
  );
}
