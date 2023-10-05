import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import foto5 from '../public/src/4.jpg'

const Mangas = () => {
  return (
    <ImageBackground style={styles.container} source={foto5}>    
        <View style={styles.mangasBackground}>
            <Text></Text>
        </View>
    </ImageBackground>
  )
}

export default Mangas


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mangasBackground: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 1,
      width: '80%',
      height: '80%',
      backgroundColor: 'green', 
      opacity: 0.8,
      borderWidth: 3,
      borderRadius: 10,
    },
  });
  