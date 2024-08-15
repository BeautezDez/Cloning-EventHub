import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { SplashScreen } from './src/screen'
import AuthNavigator from './src/screen/navigators/AuthNavigator'
import { StatusBar } from 'react-native'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import MainNavigator from './src/screen/navigators/MainNavigator'

const App = () => {
  const [isShowSplash, setisShowSplash] = useState(false)
  const [accessToken, setAccessToken] = useState('')

  const {getItem, setItem} = useAsyncStorage('assetToken')

  useEffect (() => { 
    const timeout = setTimeout(()=> {
      setisShowSplash(false);
    }, 2500)
    return () => clearTimeout(timeout) 
  }, [])

  useEffect (()=> {
    checkLogin();
  }, [])

  const checkLogin = async () => {
    const token = await getItem();

    token && setAccessToken(token)
  }

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
    {isShowSplash ? (<SplashScreen/>) : 
    (<NavigationContainer>
      {accessToken? <MainNavigator/> : <AuthNavigator/>}
    </NavigationContainer>)
  }
    </>
  )
}

export default App