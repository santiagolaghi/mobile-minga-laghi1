import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Hero = ({ navigation }) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.tituloPrincipal}>Welcome to Minga</Text>
      <View style={styles.textoSecundarioContainer}>
        <Text style={styles.textoSecundario}>
        Embark on an epic journey into the world of manga and discover new adventures waiting to be explored
        </Text>
      </View>
      <TouchableOpacity
        style={styles.touchableExplore}
        onPress={() => navigation.navigate('Mangas')}
      >
        <Text style={styles.exploreButtonText}>Explore to Mangas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'transparent',
    width: '90%',
    height: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  tituloPrincipal: {
    fontSize: 60,
    paddingBottom: 10,
    fontWeight: '900',
    textAlign: 'center',
    color: 'white',
    fontStyle: 'italic',
  },
  textoSecundarioContainer: {
    backgroundColor: 'rgba(0, 100, 00, 0.8)', 
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  textoSecundario: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  touchableExplore: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 200,
    height: 70,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exploreButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'semibold',
    textAlign: 'center'
  },
});
