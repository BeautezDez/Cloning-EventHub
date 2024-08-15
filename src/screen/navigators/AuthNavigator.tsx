import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../auth/LoginScreen';
import OnboardScreen from '../auth/OnboardScreen';

const AuthNavigator = () => {

    const Stack = createNativeStackNavigator();


    return (

        <Stack.Navigator screenOptions={ {
            headerShown:false,
        }
        }>
            <Stack.Screen name='OnboardScreen' component={OnboardScreen}/>
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        </Stack.Navigator>
  )
}

export default AuthNavigator