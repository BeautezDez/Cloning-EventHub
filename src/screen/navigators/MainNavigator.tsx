import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator'
import HomeScreen from '../home/HomeScreen'

const MainNavigator = () => {
  
  const Stack = createNativeStackNavigator()

  
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}> 
      <Stack.Screen name ='Main' component={HomeScreen}/>
    </Stack.Navigator>

  )
}

export default MainNavigator