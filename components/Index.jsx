import React from 'react'
import { StyleSheet, Text, ImageBackground } from 'react-native';
import foto6 from '../public/src/9.jpg'
import Hero from './Hero';
import LoginForm from './LoginForm';

const Index = (props) => {
  return (
    <ImageBackground style={styles.container} source={foto6}>
      <Hero navigation={props.navigation}/>
      <LoginForm navigation={props.navigation}/>
      <Text style={styles.mingaIcon}>Minga 雪</Text>
    </ImageBackground>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  mingaIcon: {
    fontSize: 30, 
    fontWeight: 'bold',
    marginTop: 10, 
    color: 'black', 
  }
});
