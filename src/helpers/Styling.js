import { StyleSheet } from 'react-native';
import { appColors, appDimens, appTexts } from '../helpers/Constants'

const textStyles = StyleSheet.create({

        errorTextStyle: {
                color: appColors.white,
                fontSize: appDimens.fifteen,
        },
        buttonStyle: {
                marginTop: 40,
                marginLeft: 30,
                marginRight: 30,
                backgroundColor: appColors.grayColor2,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: appColors.black,
                alignItems: 'center',
                justifyContent: 'center'
        },
        submit: {
                borderRadius: 10,
                width: '99%',
                padding: 12,
        },

        buttonText: {
                color: appColors.primary,
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold'
        },
        outerContainer: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFF',
        },
        innerContainer: {
                height: '100%',
                width: '100%',
                backgroundColor: '#FFF',
                borderRadius: 0,
                borderWidth: 4,
                borderColor: '#e66125',
        },
        textStyle: {
                fontSize: 30,
                color: '#eb5f33',
                marginBottom: 5
        },
        dialogsOverlay: {
                position: appTexts.absolute,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                justifyContent: appTexts.centerText,
                alignItems: appTexts.centerText,
                zIndex: 1000,
                backgroundColor: appColors.grayColor
        },
        IconOverlay: {
                position: appTexts.absolute,
                alignSelf: appTexts.rightText,
                backgroundColor: appColors.transparentColor,
        },
});
export default textStyles;