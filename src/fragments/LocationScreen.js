import React from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'
import { appColors, appTexts, appDimens } from '../helpers/Constants'
import ValidationComponent from '../helpers/ValidationComponent'

export default class LocationScreen extends ValidationComponent {

  state = {
    subject: "",
    message: "",
    loading: false,
    error: '',
    success: false
  }

  render() {

    return (
      <SafeAreaView style={{ backgroundColor: appColors.white, flex: appDimens.one }}>

        <Text style={styles.textStyle}>Support</Text>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({

  editText: {
    padding: 0,
    paddingLeft: appDimens.ten,
    paddingRight: appDimens.ten,
    marginBottom: appDimens.five,
    fontFamily: appTexts.fontFamily,
    fontSize: appDimens.forteen,
    color: appColors.black,
  },
  textareaContainer: {
    height: appDimens.oneNighttyEight,
    padding: appDimens.five,
    backgroundColor: appColors.white,
  },
  textarea: {
    textAlignVertical: appTexts.textAtTop,
    height: appDimens.oneNighttyEight,
    paddingBottom: appDimens.five,
    fontFamily: appTexts.fontFamily,
    fontSize: appDimens.forteen,
    color: appColors.black,
  },
  rectangele: {
    borderColor: appColors.primary,
    borderWidth: appDimens.one,
  },

  boldTextStyle: {
    color: appColors.primary,
    fontSize: appDimens.twenty,
    marginBottom: appDimens.ten,
    marginTop: appDimens.fifteen,
    fontFamily: appTexts.fontFamily,
    fontWeight: appTexts.boldText
  },
  normalTextStyle: {
    fontFamily: appTexts.fontFamily,
    color: appColors.primary, fontSize: appDimens.seventeen, marginBottom: appDimens.ten, marginTop: appDimens.ten
  },
  blackTextStyle: {
    fontFamily: appTexts.fontFamily,
    color: appColors.black, fontSize: appDimens.seventeen, marginBottom: appDimens.ten, marginTop: appDimens.five
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
    fontFamily: appTexts.fontFamily,
    fontSize: appDimens.forteen,
  },
});
