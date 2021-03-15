import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import getData, { destroy } from './api/providers';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Points({ navigation }) {
  const [accounts, setAccounts] = useState({});
    
  useEffect( 
    () => {
      AsyncStorage.getItem('token').then(
        (token) => getData(token).then(
          setAccounts));
      }, 
    [],
  );

  function del(account){
    Alert.alert('Deletar Usuario', '',[
      {
        text: 'Sim', onPress() 
          { 
            AsyncStorage.getItem('token').then(
              token => destroy(token, account).then(
                () => navigation.reset({ index: 0, routes: [{ name: 'Points' }] })
              )
            )
          }
      },
      { text: 'Não'}
    ])    
  };

  function renderItem({ item: account }) {
      return(
          <View style={styles.flatlist}>
            <Text style={styles.text}>ID: {account.id}</Text>
            <Text style={styles.text}>Nome: {account.nome}</Text>
            <Text style={styles.text}>Telefone: {account.tel}</Text>
            <Text style={styles.text}>Data: {account.dt_nasc}</Text>

            <TouchableOpacity style={styles.button_update} onPress={() => navigation.navigate('Atualizar', account)}>
              <Text style={styles.text_button_sigin}>Atualizar dados</Text>    
            </TouchableOpacity>

            <TouchableOpacity style={styles.button_del} onPress={() => del(account)}>
              <Text style={styles.text_button_sigin}>Deletar</Text>    
            </TouchableOpacity>
          </View>
      )
    }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.flatlist}>
        <FlatList
          data={accounts}
          renderItem={renderItem}
          keyExtractor={account => account.id.toString()}
        />
      </View>

      <View style={styles.container_button}>
        <TouchableOpacity style={styles.button_update} onPress={() => navigation.navigate('Criar')}>
          <Text style={styles.text_button_sigin}>Criar dados</Text>    
        </TouchableOpacity>
      </View>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container_grid_points: {
    flex: 1.2,
  },
  container_points: {
    flexDirection: 'row',
  },
  selo: {
    height: 60,
    width: 60,
    margin: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#4A0A24',
    alignItems: 'center',
  },
  container_logo: {
    alignItems: 'center',
    marginTop: 30,
    flex: 1
  },
  logo: {
    height: 200,
    width: 200,
  },
  container_inputs: {
    // backgroundColor: 'red',
    margin: 50
  },
  button_update: {
    backgroundColor:'#6AB851',
    width: 300,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
  },
  button_del: {
    backgroundColor:'red',
    width: 300,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
  },
  text_button_sigin: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 22,
    padding: 10,
  },
  text: {
    flex: 1,
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 22,
    // padding: 10,    
  },
  flatlist: {
    flex: 0.9,
    
    paddingTop: 50,    
  },
});
