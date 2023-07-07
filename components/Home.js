import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import { View,StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import BlogDisplay from './BlogDisplay';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
    const [data, setData] = useState([]);
    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://192.168.0.114:3000/posts')
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchBlogs()
    },[])

    

    const goToCreateBlog = async () => {
      await fetchBlogs()
      navigation.navigate("CreateBlog")
    }

    const handleDeleteBlog = async (id) => {
      try {
        await axios.delete('http://192.168.0.114:3000/posts/' + id);
        const deleteBlog = data.filter(blog => blog.id !== id);
        setData(deleteBlog);
      } catch (error) {
        console.log(error);
      }
    };
    

    

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {
          data.length === 0 ? <Text>Nothing To Show</Text> : 
          <>
            <BlogDisplay data={data} handleDeleteBlog={handleDeleteBlog} />
            <View style={styles.iconAlign}>
              <AntDesignIcon name="pluscircle" size={40} onPress={goToCreateBlog} />
            </View>
          </>
        }
        
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({ 
  container : {
    flex: 1,
    
  },
  iconAlign: {
    marginTop: 30,
    alignItems: 'center',
  }  
})

export default Home