import React from 'react';
import Login from './src/pages/Login';
import Register from './src/pages/register';
import Points from './src/pages/points';
import Atualizar from './src/pages/atualizar';
import Create from './src/pages/criar';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator inicialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen  name="Points" component={Points}/>
        <Stack.Screen  name="Atualizar" component={Atualizar}/>
        <Stack.Screen  name="Criar" component={Create}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
