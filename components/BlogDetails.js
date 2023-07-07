import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '@rneui/base';
import { useRoute, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Button } from 'react-native';

const BlogDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [blogDetailData, setBlogDetailData] = useState({});
  const fetchAllData = async () => {
    try {
      const response = await axios.get(`http://192.168.0.114:3000/posts/${route.params.id}`);
      setBlogDetailData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const goToHome = () => {
    navigation.navigate("Home")
  }



  return (
    <View>
      <Card style={styles.cardContainer}>
        <Text>Name: {blogDetailData.name}</Text>
        <Text>Email: {blogDetailData.email}</Text>
        <Text>Title: {blogDetailData.title}</Text>
        <Text>Content: {blogDetailData.content}</Text>
      </Card>
        <View style={styles.buttonStyles}>
          <Button onPress={goToHome} title='GoToHome'/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 8,
    padding: 16,
    width: '90%',
    alignSelf: 'center',
  },
  buttonStyles: {
    width: 100,
    marginTop: 20,
  }
});

export default BlogDetails;
