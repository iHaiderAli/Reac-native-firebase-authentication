import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native' // prettier-ignore
import { appColors, appTexts, appDimens } from '../helpers/Constants'
import { connect } from 'react-redux'

export default class ChatScreen extends PureComponent {

  state = {
    data: [],
    loading: false,
    error: '',
    success: false
  }

  render() {
    return (
      <SafeAreaView>

        <Text style={styles.textStyle}>Chat Screen</Text>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({

  textStyle: {
    alignSelf:'center',
    fontFamily: appTexts.fontFamily,
    fontSize: appDimens.twenty,
    marginBottom: appDimens.twenty,
    marginTop: appDimens.fifteen,
    fontWeight: appTexts.boldText,
    textAlign: appTexts.justyfy,
    color: appColors.primary
  },

});
