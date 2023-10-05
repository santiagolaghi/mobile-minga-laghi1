import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import saveAuthor from '../redux/actions/me_authors';
import signinToken from '../redux/actions/signinToken'; // Importa la acción signinToken
import { useDispatch, useSelector } from 'react-redux';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { user, token } = useSelector((store) => store.me_authorsReducer);

  useEffect(() => {
    // Verificar si el usuario está autenticado y navegar a "Mangas" si es así
    if (token) {
      navigation.navigate('Mangas');
    }
  }, [token, navigation]);

  async function enviarData() {
    const userData = {
      email: email,
      password: password,
    };

    try {
      const credenciales = await axios.post("https://backendminga.onrender.com/auth/signin", userData);
      const authToken = credenciales.data.response.token;
      dispatch(saveAuthor(authToken));
      await AsyncStorage.setItem("token", authToken);
      await AsyncStorage.setItem("user", credenciales.data.response.user.email);
      dispatch(signinToken(authToken)); // Despacha la acción signinToken después del inicio de sesión
    } catch (error) {
      console.log("error feo", error);
      Alert.alert('Login Failed', 'Please check your email and password.');
    }
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.tituloPrincipal}>Login to Minga</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#777"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#777"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.touchableLogin}
        onPress={async () => {
          await enviarData();
        }}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableRegister}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '90%',
    height: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    borderRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  tituloPrincipal: {
    fontSize: 36,
    paddingBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontStyle: 'italic',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  touchableLogin: {
    backgroundColor: '#388E3C',
    width: 150,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  touchableRegister: {
    backgroundColor: '#194D33',
    width: 150,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
});