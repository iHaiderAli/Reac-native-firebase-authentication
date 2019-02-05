import { StyleSheet } from 'react-native';
import { appColors, appDimens, appTexts } from '../helpers/Constants'

const textStyles = StyleSheet.create({

        errorTextStyle: {
                color: appColors.red,
                fontSize: appDimens.fifteen,
        },
        buttonStyle: {
                width: appDimens.eightyTwo,
                backgroundColor: appColors.white,
                borderWidth: appDimens.one,
                marginTop: appDimens.ten,
                alignSelf: appTexts.flexEnd,
                alignItems: appTexts.centerText,
                borderColor: appColors.primary,
        },
        submit: {
                width: appDimens.eighty,
                padding: appDimens.ten
        },
        buttonText: {
                color: appColors.primary,
                textAlign: appTexts.centerText,
                fontSize: appDimens.forteen,
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