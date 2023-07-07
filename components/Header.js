import React from 'react';
import {View, Text, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Blog Application</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        backgroundColor: "orange",
        padding:20
    },
    header: {
        textAlign: "center",
        color: "white"
    }
})

export default Header