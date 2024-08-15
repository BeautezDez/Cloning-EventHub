import { StyleSheet } from "react-native";
import { appColors } from "../constants/appColors";
import { appInfo } from "../constants/appInfo";

export const globalStyles = StyleSheet.create ({
    container:{ 
        flex: 1,
        backgroundColor: appColors.white,
    },
    card: {
        marginHorizontal: appInfo.sizes.WIDTH*0.125,
        flex:1,
        width: appInfo.sizes.WIDTH*0.75,
        resizeMode:'contain',
        alignItems:'center'
    },
    onboardswipe: {
        height: appInfo.sizes.HEIGHT*0.35,
        backgroundColor: appColors.primary,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    },
})