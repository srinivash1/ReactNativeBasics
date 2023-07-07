import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React,{ useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

const UpdateBlog = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const router = useRoute();
    const fetchBlogData = async () => {
        try {
            const response = await axios.get(`http://192.168.0.114:3000/posts/${router.params.id}`);
            setName(response.data.name);
            setEmail(response.data.email);
            setTitle(response.data.title);
            setContent(response.data.content);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchBlogData()
    },[])

    const handleSubmit = async() => {
        try {
            await axios.patch(`http://192.168.0.114:3000/posts/${router.params.id}`, {
                name: name,
                email: email,
                title: title,
                content: content
            })
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Name:</Text>
        <TextInput
          style={styles.input} 
          placeholder='Enter Your Name'
          defaultValue={name}
          onChangeText={newText => setName(newText)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Email:</Text>
        <TextInput
          style={styles.input} 
          placeholder='Enter Your Email'
          defaultValue={email}
          onChangeText={newEmail => setEmail(newEmail)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Title:</Text>
        <TextInput
          style={styles.input} 
          placeholder='Enter Your Title'
          defaultValue={title}
          onChangeText={newTitle => setTitle(newTitle)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Content:</Text>
        <TextInput 
          multiline
          style={styles.input}
          placeholder='Enter Your Cont'
          defaultValue={content}
          onChangeText={newContent => setContent(newContent)}
        />
      </View>

      <View style={styles.button}>
        <Button title='Update Blog' onPress={handleSubmit} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ 
    container: {
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer : {
      marginTop: 20,
    },
    input : {
      width: 200,
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
    },
    button : {
      marginTop: 30,
      width: 150,
    }
  })

export default UpdateBlog