import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const stack = createStackNavigator()


import UsersList from './screens/UsersList'
import UserDetailScreen from './screens/UserDetailScreen'
import CreateUserScreen from './screens/CreateUserScreen'
//Retorna un componente que viene desde  reac navigation stacks, es decir muestra la navegación de las pantallas
function Mystack() {
  return (
    <stack.Navigator>
      <stack.Screen name="USerList" component={UsersList} />
      <stack.Screen name="UserDeatilScreen" component={UserDetailScreen} />
      <stack.Screen name="CreateUSerScreen" component={CreateUserScreen} />
    </stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
