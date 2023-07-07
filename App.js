import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import Home from "./components/Home";
import BlogDetails from './components/BlogDetails';
import CreateBlog from "./components/CreateBlog";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UpdateBlog from "./components/UpdateBlog";

const Stack = createNativeStackNavigator();

const App = () => { 
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="BlogDetails" component={BlogDetails} />
          <Stack.Screen name="CreateBlog" component={CreateBlog} />
          <Stack.Screen name="UpdateBlog" component={UpdateBlog}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  }
})

export default App;