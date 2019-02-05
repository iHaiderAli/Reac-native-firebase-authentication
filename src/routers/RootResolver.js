import { Component } from 'react'
import {openLoginScreen} from '../components/authCom/Login'

export default class RootResolver extends Component {
  
  constructor() {
    super()

    //check User is loggedIn or not?
    openLoginScreen()
  }

//   resolveRoute(props: Props) {
//     if (props.authMethod && props.pubKey != null) {
//       if (props.authMethod === AuthMethod.PIN) {
//         openPinLockScreen({ unlockedScreen: 'HomeScreen' }, true)
//       } else if (props.authMethod === AuthMethod.FINGERPRINT) {
//         openFingerLockScreen({ isSetup: false, unlockedScreen: 'HomeScreen' }, true)
//       }
//       // openExchangeScreen()
//     } else {
//       openWelcomeScreen()
//     }
//   }

  render() {
    return null
  }
}
