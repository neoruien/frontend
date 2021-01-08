import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { styles } from "../../stylesheets/appStyles.js";
import DATA  from "../../data/dummyBoxData.js";
import boxDataScreen from "./boxDataScreen.js"

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const renderItem = ({ item, navigation }) => {

  return (
    <Item
      item={item}
      onPress={() => navigation.navigate('See box', {itemId : item.id})}
    />
  );
};

const Stack = createStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: blueColor,
            },
          }}
        >
          <Stack.Screen name="See box" component={boxDataScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
