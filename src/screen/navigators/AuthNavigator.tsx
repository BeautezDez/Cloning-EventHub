import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ForgotPassword from '../auth/ForgotPassword';
import LoginScreen from '../auth/LoginScreen';
import OnboardScreen from '../auth/OnboardScreen';
import SignUpScreen from '../auth/SignUpScreen';
import Verication from '../auth/Verication';


const AuthNavigator = () => {

    const Stack = createNativeStackNavigator();


    return (

        <Stack.Navigator screenOptions={ {
            headerShown:false,
        }
        }>
            <Stack.Screen name='OnboardScreen' component={OnboardScreen}/>
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
            <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
            <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
            <Stack.Screen name='Verication' component={Verication}/>
        </Stack.Navigator>
  )
}

export default AuthNavigator