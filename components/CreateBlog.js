import React,{ useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const CreateBlog = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //Submit Details
  const handleSubmit = async () => {
   try {
    const response = await axios.post("http://192.168.0.114:3000/posts", {
      name,
      email,
      title,
      content
    })
   } catch (error) {
    console.log(error);
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
        <Button title='Submit' onPress={handleSubmit} />
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

export default CreateBlog