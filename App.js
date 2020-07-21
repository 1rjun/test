/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Root
} from 'native-base'

import {
  NavigationContainer
} from '@react-navigation/native'
import {
createStackNavigator
} from '@react-navigation/stack'

import Login from './src/screens/login'
import Homepage from './src/screens/homepage'
import Tab from './src/screens/tab'

const Stack = createStackNavigator();
console.disableYellowBox=true
const StackNavigator = () => {
  return (
   <Root>
      <NavigationContainer>
      <Stack.Navigator  screenOptions={{
        headerShown: false,
      }} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
        {/* <Stack.Screen name="Homepage" component={Homepage}/> */}
        <Stack.Screen name="Tab" component={Tab}/>
      </Stack.Navigator>
</NavigationContainer>
 </Root>
  )
}


const App =  () => {
  return <StackNavigator/>;
};

export default App;
