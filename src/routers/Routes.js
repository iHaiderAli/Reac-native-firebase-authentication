import React, { Component } from 'react'
import { BackHandler, DeviceEventEmitter } from 'react-native'

import navigation from './navigation'
import ModalStack from '../Stacks/ModelStack'

export default class Routes extends Component {
  
  backPressSubscriptions = new Set()

  componentDidMount = () => {
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
    DeviceEventEmitter.addListener('hardwareBackPress', () => {
      let invokeDefault = true
      const subscriptions = []

      this.backPressSubscriptions.forEach(sub => subscriptions.push(sub))

      for (let i = 0; i < subscriptions.reverse().length; i += 1) {
        if (subscriptions[i]()) {
          invokeDefault = false
          break
        }
      }

      if (invokeDefault) {
        BackHandler.exitApp()
      }
    })

    this.backPressSubscriptions.add(navigation.backButtonHandler)
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
    this.backPressSubscriptions.clear()
  }

  setNavigatorRef = ref => navigation.setNavigator(ref)

  render() {
    return <ModalStack ref={this.setNavigatorRef} />
  }
}
