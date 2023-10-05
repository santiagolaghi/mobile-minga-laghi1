import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import foto7 from '../public/src/6.jpg';

const Register = () => {
  return (
    <ImageBackground style={styles.container} source={foto7}>
      <View style={styles.registerBackground}>
        <Text style={styles.registerTitle}>Register</Text>
        <Text style={styles.registerText}>Username:</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.registerText}>Email:</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.registerText}>Photo (as URL):</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.registerText}>Password:</Text>
        <TextInput secureTextEntry={true} style={styles.textInput} />
        <TouchableOpacity
          style={styles.touchableRegister}
          onPress={() => {/* Agrega la lógica de registro aquí */}}
        >
          <Text style={styles.registerButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <StatusBar style="auto" translucent={false} backgroundColor="white" />
      </View>
    </ImageBackground>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'rgba(255, 255, 255, 1)', // Color de título en tono de rojo
  },
  textInput: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 1)', // Fondo con opacidad en blanco
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: 'black',
    fontSize: 30,
  },
  registerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white', // Color de texto en tono de rojo
  },
  registerBackground: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
    width: '80%',
    height: '100%',
    backgroundColor: 'rgba(50, 50, 50, 0.6)', // Fondo con opacidad en blanco
    borderWidth: 6,
    borderRadius: 15,
    borderColor: 'black', // Color del borde en tono de rojo
  },
  touchableRegister: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green', // Color de botón en tono de rojo
    width: '50%',
    height: 50,
    borderRadius: 25,
    marginTop: 20,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
