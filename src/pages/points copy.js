import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import getData, { getToken } from './api/providers';
import { colors, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


export default function Points({ navigation }) {

  const [accounts, setAccounts] = useState({});
  // const [refreshing, setRefreshing] = useState(false);
  const logo = require('../assets/postodoacai.png');
  const logoPB = require('../assets/postodoacaiPB.png');

  function renderItem({ item: account }) {
    
    return(
      <View >
        <Text style={styles.text}>ID: {account.id}</Text>
        <Text style={styles.text}>Usuario: {account.nome}</Text>
        <Text style={styles.text}>Telefone: {account.tel}</Text>
        {/* <Text style={styles.text}>Data: {account.dt_nasc}</Text> */}
      </View>
    )
  }

  useEffect(() => {
    getData().then(setAccounts);
  }, []);

  // function onRefresh() {
  //   getData().then(setRefreshing);
  // }

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container_logo}>
        <Image style={styles.logo} source={logo}/>
      </View> */}
      
      <FlatList
        data={accounts}
        renderItem={renderItem}
        keyExtractor={account => account.id.toString()}
        // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
      
      <View style={styles.container_button}>
        <TouchableOpacity style={styles.button_signup} onPress={() => navigation.navigate('Atualizar')}>
          <Text style={styles.text_button_signup}>Atualizar dados</Text>    
        </TouchableOpacity>
      </View>



      {/* <View style={styles.container_grid_points}>
        <View style={styles.container_points}>
          <View >
            <Image style={styles.selo} source={logo}/>
          </View>
          <View >
            <Image style={styles.selo} source={logoPB}/>
          </View>  
          <View >
            <Image style={styles.selo} source={logoPB}/>
          </View>
          <View >
            <Image style={styles.selo} source={logoPB}/>
          </View>
          <View >
            <Image style={styles.selo} source={logoPB}/>
          </View>
        </View>
        <View style={styles.container_points}>
          <View >
            <Image style={styles.selo} source={logoPB}/>
          </View>
          <View >
            <Image style={styles.selo} source={logoPB}/>
          </View>  
          <View >
            <Image style={styles.selo} source={logoPB}/>
          </View>
          <View >
            <Image style={styles.selo} source={logoPB}/>
          </View>
          <View >
            <Image style={styles.selo} source={logoPB}/>
          </View>
        </View>    
        <View style={styles.container_points}>
          <View >
            <Image style={styles.selo} source={logoPB}/>
          </View>
          <View >
            <Image style={styles.selo} source={logoPB}/>
          </View>  
          <View >
            <Image style={styles.selo} source={logoPB}/>
          </View>
          <View >
            <Image style={styles.selo} source={logoPB}/>
          </View>
          <View >
            <Image style={styles.selo} source={logoPB}/>
          </View>
        </View>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fletlist: {
    // flex: 1
    
  },
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
});
