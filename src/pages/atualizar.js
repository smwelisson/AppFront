import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { TextInput  } from 'react-native-gesture-handler';
import { update } from './api/providers';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Atualizar({ route, navigation }) {
  const [account, setAccount] = useState(route.params ? route.params : {});

  function save(account){
    AsyncStorage.getItem('token').then(
      (token) => update(token, account).then(
        () => navigation.reset({ index: 0, routes: [{ name: 'Points' }] })
      )
    )    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container_input}> 

        <>
          <View style={styles.container_input}>
            <TextInput 
              style={styles.input}
              placeholder='Nome'
              placeholderTextColor= '#65B94D'
              value={account.nome}
              onChangeText={nome => setAccount({...account, nome})}
            />
            <TextInput 
              style={styles.input}
              placeholder='Tel'
              placeholderTextColor= '#65B94D'
              value={account.tel}
              onChangeText={tel => setAccount({...account, tel})}
            />
            <TextInput 
              style={styles.input}
              placeholder='Tel'
              placeholderTextColor= '#65B94D'
              value={account.dt_nasc}
              onChangeText={dt_nasc => setAccount({...account, dt_nasc})}
            />
          </View>
          
          <View style={styles.container_button}>
            <TouchableOpacity style={styles.button} onPress={() => save(account)}>
              <Text style={styles.text_button}>Salvar</Text>    
            </TouchableOpacity>
          </View>
        </>

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
    justifyContent: 'center',
    marginTop: 100,
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
  text: {
    color: '#65B94D',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});




 