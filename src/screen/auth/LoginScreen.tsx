import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ButtonComponent from '../../components/ButtonComponent'
import { globalStyles } from '../../styles/globalStyles'

const LoginScreen = () => {
  return (
    <View style={[globalStyles.container, { padding: 16 }]}>
      {/* <Text>LoginScreen</Text>
      <Button title='Login' onPress={async () => await AsyncStorage.setItem('assetToken', 'ffff')}/> */}
      <ButtonComponent type='Link' text='Forget pass??' onPress={() => console.log('Login')} icon = {
        <View> 
          <Text> Con cac</Text>
        </View>
      }/>
    </View>
  )
}

export default LoginScreen