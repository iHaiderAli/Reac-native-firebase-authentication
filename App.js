import React, { PureComponent } from 'react'
import { View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import Routes from './src/routers/Routes';
import { YellowBox } from 'react-native';
import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyDaeEvHpJXhLRfMos0WLVD_OpvtSWA0KeE",
  authDomain: "myapplication-e3f24.firebaseapp.com",
  databaseURL: "https://myapplication-e3f24.firebaseio.com",
  projectId: "myapplication-e3f24",
  storageBucket: "",
  messagingSenderId: "892170186986"
};
Firebase.initializeApp(config);


export default class App extends PureComponent {
  constructor(props) {
    super(props)
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
  }

  render() {
    return (
      <Provider>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" backgroundColor="#ccc" />
          <Routes />
        </View>
      </Provider>
    )
  }
}