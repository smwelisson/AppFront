import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { TextInput  } from 'react-native-gesture-handler';
import getData, { register } from './api/providers';



export default function Register() {


  const logo = require('../assets/postodoacai.png');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  function cadastrar(){
    register(username, password, password2);
    navigation.navigate('Points')
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.container_logo}>
        <Image style={styles.logo} source={logo}/>
      </View>

      <View style={styles.container_input}>
        <TextInput 
          style={styles.input}
          placeholder='Usuário'
          placeholderTextColor= '#65B94D'
          value={username}
          onChangeText={username => setUsername(username)}
        />
        {/* <TextInput 
          style={styles.input}
          placeholder='Telefone'
          placeholderTextColor= '#65B94D'
        />
        <TextInput 
          style={styles.input}
          placeholder='Data de Nascimento'
          placeholderTextColor= '#65B94D'
        /> */}
        <TextInput 
          style={styles.input}
          placeholder='Senha'
          placeholderTextColor= '#65B94D'
          value={password}
          // secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
        <TextInput 
          style={styles.input}
          placeholder='Repita a senha'
          placeholderTextColor= '#65B94D'
          value={password}
          // secureTextEntry={true}
          onChangeText={password2 => setPassword2(password2)}
        />
        <TouchableOpacity style={styles.button} onPress={cadastrar}>
          <Text style={styles.text_button}>Cadastrar</Text>    
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A0A24',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  container_logo: {
    alignItems: 'center',
  },
  logo: {
      height: 170,
      width: 170,
  },
  container_input: {
    alignItems: 'center',
  },
  input: {
    color: '#65B94D',
    fontSize: 18,
    backgroundColor: "#532185",
    paddingLeft: 15,
    width: 300,
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  container_button: {
    alignItems: 'center',
  },
  button: {
    backgroundColor:'#6AB851',
    width: 300,
    height: 40,
    borderRadius: 8,
    margin: 10,
  },
  text_button: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
  },
  container_button_signup: {
    flex: 0.5,
    alignItems: 'center',
  },
});
