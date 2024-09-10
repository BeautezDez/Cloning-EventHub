import { StyleSheet } from "react-native";
import { appColors } from "../constants/appColors";
import { appInfo } from "../constants/appInfo";
import { Text } from "react-native-reanimated/lib/typescript/Animated";
import { fontFamilies } from "../constants/fontFamilies";

export const globalStyles = StyleSheet.create ({
    container:{ 
        flex: 1,
        backgroundColor: appColors.grayBg,
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
    text: {
        fontFamily: fontFamilies.regular,
        fontSize: 14,
        color: appColors.black,
    },
    button: {
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.primary,
        padding: 16,
        minHeight: 56,
        flexDirection: 'row',
    },
    section: {
        paddingHorizontal: 16,
        paddingBottom: 20,  
    },
    row: {
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    shadow:{
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 6,
    },
})