import { View, Text, FlatList, Button, StyleSheet } from 'react-native'
import React from 'react'
import { Card } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const BlogDisplay = ({data,handleDeleteBlog}) => {
  const navigation = useNavigation();

  const handleCardPress = (id) => {
    //Navigate to the Blog Details Page
    navigation.navigate("BlogDetails",{id:id})
  }

  const handleEditBlog = (id) => {
    navigation.navigate("UpdateBlog", {id:id})
  }

  
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={{ marginVertical: 8, padding: 16 }}>
            <Text >Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Title: {item.title}</Text>
            <View style={styles.buttonStyles}>
              <Button 
                title='View More'
                onPress={() => handleCardPress(item.id)}
              />
            </View>
            <View style={styles.buttonStyles}>
              <Button 
                title='Edit'
                onPress={() => handleEditBlog(item.id)}
              />
            </View>
            <View style={styles.buttonStyles}>
              <Button 
                title='Delete'
                onPress={() => handleDeleteBlog(item.id)}
              />
            </View>
          </Card>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({ 
  buttonStyles: {
    width: 100,
    marginTop: 20,
  }
})

export default BlogDisplay