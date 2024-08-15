import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import { globalStyles } from '../../styles/globalStyles'
import Swiper from 'react-native-swiper'
import { appColors } from '../../constants/appColors'
import SpaceComponent from '../../components/SpaceComponent'
import { appInfo } from '../../constants/appInfo'

export default function OnboardScreen({ navigation }: any) {
    const swiperRef = useRef(null);

    const handleNextPress = () => {
        // Check if we're at the last slide; if so, navigate to LoginScreen
        if (swiperRef.current && swiperRef.current.state.index === 2) {
            navigation.navigate('LoginScreen');
        } else {
            // Otherwise, move to the next slide
            swiperRef.current.scrollBy(1, true);
        }
    };

    return (
        <View style={[globalStyles.container]}>
            <Swiper
                ref={swiperRef}
                loop={false}
                activeDotColor={appColors.white}>
                <View style={[globalStyles.container]}>
                    <SpaceComponent height={appInfo.sizes.HEIGHT * 0.12} />
                    <Image source={require('../../assets/image/onboard-1.png')} style={[globalStyles.card]} />
                    <View style={[globalStyles.onboardswipe]}>
                        <Text style={[styles.headertext]}>
                            Explore Upcoming and Nearby Events
                        </Text>
                        <Text style={[styles.contenttext]}>
                            In publishing and graphic design, Lorem is a placeholder text commonly
                        </Text>

                    </View>
                </View>
                <View style={[globalStyles.container]}>
                    <SpaceComponent height={appInfo.sizes.HEIGHT * 0.12} />
                    <Image source={require('../../assets/image/onboard-2.png')} style={[globalStyles.card]} />
                    <View style={[globalStyles.onboardswipe]}>
                        <Text style={[styles.headertext]}>
                            Web Have Modern Events Calendar Feature
                        </Text>
                        <Text style={[styles.contenttext]}>
                            In publishing and graphic design, Lorem is a placeholder text commonly
                        </Text>
                    </View>
                </View>
                <View style={[globalStyles.container]}>
                    <SpaceComponent height={appInfo.sizes.HEIGHT * 0.12} />
                    <Image source={require('../../assets/image/onboard-3.png')} style={[globalStyles.card]} />
                    <View style={[globalStyles.onboardswipe]}>
                        <Text style={[styles.headertext]}>
                            To Look Up More Events or Activities Nearby By Map
                        </Text>
                        <Text style={[styles.contenttext]}>
                            In publishing and graphic design, Lorem is a placeholder text commonly
                        </Text>

                    </View>
                </View>
            </Swiper>
            <View style={[styles.touchButton]}>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={[styles.buttontext]}> Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNextPress}>
                    <Text style={[styles.buttontext]}> Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    touchButton: {
        paddingHorizontal: appInfo.sizes.WIDTH * 0.1,
        paddingVertical: 22,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headertext: {
        color: appColors.white,
        fontSize: 22,
        fontWeight: 'medium',
        paddingHorizontal: appInfo.sizes.WIDTH * 0.15,
        paddingTop: 40,
        justifyContent: 'center',
        textAlign: 'center',
        lineHeight: 34,
    },
    contenttext: {
        color: appColors.white,
        fontSize: 15,
        marginTop: 15,
        paddingHorizontal: appInfo.sizes.WIDTH * 0.1,
        justifyContent: 'center',
        textAlign: 'center',
        lineHeight: 25,
    },
    buttontext: {
        color: appColors.white,
        fontSize: 16,
        fontWeight: '500'
    }
})
