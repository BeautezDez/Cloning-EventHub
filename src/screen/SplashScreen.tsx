import React from 'react'
import { ActivityIndicator, Image, View } from 'react-native'
import { appInfo } from '../constants/appInfo'
import SpaceComponent from '../components/SpaceComponent'
import { appColors } from '../constants/appColors'

const SplashScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Image
                source={require("../assets/image/Splash_icon.png")}
            style={{
                    width: appInfo.sizes.WIDTH * 0.7,
                    resizeMode: 'contain',
                }} />
            <SpaceComponent height={20}/>
            <ActivityIndicator color={appColors.typo4} size={42}/>

            
        </View>

    )
}

export default SplashScreen