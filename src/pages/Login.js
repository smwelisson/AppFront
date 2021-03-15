import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import getData, { getToken } from './api/providers';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({ navigation }) {

  const logo = require('../assets/postodoacai.png');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  function logar() {
    getToken(username, password).then(
      (token) => AsyncStorage.setItem('token', token).then(
        () => navigation.navigate('Points'))
    )      
  }


  return (

    <SafeAreaView style={styles.container}>
      
      {/* <View style={styles.container_logo}>
        <Image style={styles.logo} source={logo}/>
      </View> */}

      <View style={styles.container_inputs}>
        <TextInput 
          style={styles.input}
          placeholder='Usuário'
          placeholderTextColor= '#65B94D'
          value={username}
          onChangeText={username => setUsername(username)}
        />
        <TextInput
          style={styles.input}
          placeholder='Senha'
          secureTextEntry={true}
          placeholderTextColor= '#65B94D'
          value={password}
          onChangeText={password => setPassword(password)}
        />
        <TouchableOpacity style={styles.button_sigin} onPress={logar}>
          <Text style={styles.text_button_sigin}>Entrar</Text>    
        </TouchableOpacity>
      </View>   

      <View style={styles.container_button}>    

        {/* <TouchableOpacity style={styles.button_signup} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.text_button_signup}>Cadastre-se</Text>    
        </TouchableOpacity> */}
      </View>     
    </SafeAreaView>    
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 10,

  },
  container: {
    flex: 1,
    backgroundColor: '#4A0A24',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20, 
    marginBottom: -7
  },
  container_logo: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    height: 200,
    width: 200,
    marginTop: 50
  },
  container_inputs: {
    // padding: 40,
    // marginTop: 10,
  },
  input: {
    color: '#65B94D',
    fontSize: 18,
    // backgroundColor: "#431E6B",
    backgroundColor: "#532185",
    paddingLeft: 15,
    width: 300,
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  container_inputs: {
    // backgroundColor: 'red',
    margin: 50
  },
  button_sigin: {
    backgroundColor:'#6AB851',
    width: 300,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  text_button_sigin: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 22,
    padding: 10,
  },
  button_signup: {
    width: 300,
    height: 40,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    // marginTop: 80,
    // marginBottom: 20,
  },
  text_button_signup: {
    color: '#65B94D',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  footer: {
    backgroundColor:'#000000',
    alignSelf: 'stretch',
  },
});

// #431E6B   cor roxa escuro
// #65B94D       verde