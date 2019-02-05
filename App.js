import React, { PureComponent } from 'react'
import { View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import Routes from './src/routers/Routes';

export default class App extends PureComponent {
  constructor(props) {
    super(props)
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