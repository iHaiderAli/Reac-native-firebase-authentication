import React, { PureComponent } from 'react'
import { AsyncStorage, View, Text, SafeAreaView, TouchableHighlight, InteractionManager, ActivityIndicator } from 'react-native'
import { appColors } from '../helpers/Constants'
import Styling from '../helpers/Styling'
import navigation from '../routers/navigation'
import firebase from 'firebase'
import { Cache } from "react-native-cache";

var cache = new Cache({
  namespace: "Routers",
  policy: {
    maxEntries: 50000
  },
  backend: AsyncStorage
});

export default class HomeScreen extends PureComponent {

  state = {
    data: [],
    loading: false,
    error: '',
    success: false
  }

  logout() {
    cache.clearAll(function (err) {
    });
    firebase.auth().signOut();
    InteractionManager.runAfterInteractions(() => {
      navigation.navigate('Login')
    })
  }

  render() {

    return (
      <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
        <View style={Styling.buttonStyle}>

          <TouchableHighlight
            style={Styling.submit}
            underlayColor={appColors.white}>
            <Text style={Styling.buttonText}>Save My Location</Text>
          </TouchableHighlight>

        </View>
        <View style={Styling.buttonStyle}>

          <TouchableHighlight
            style={Styling.submit}
            underlayColor={appColors.white}>
            <Text style={Styling.buttonText}>List of Users</Text>
          </TouchableHighlight>
        </View>
        <View style={Styling.buttonStyle}>

          <TouchableHighlight
            style={Styling.submit}
            onPress={() => {
              this.logout()
            }}
            underlayColor={appColors.white}>
            <Text style={Styling.buttonText}>Logout</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    )
  }
}
