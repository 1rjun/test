import * as React from 'react';
import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../homepage'
// import Login from '@screens/login'

function Dummy() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dummy</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    
      <Tab.Navigator>
          <Tab.Screen name="HomePage" component={HomePage} />
          <Tab.Screen name="Dummy" component={Dummy} />
        </Tab.Navigator>
    
    
  );
}