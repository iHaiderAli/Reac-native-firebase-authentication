import { Component } from 'react'
import { openLoginScreen } from '../components/authCom/Login'

export default class RootResolver extends Component {

  constructor() {
    super()

    //check User is loggedIn or not?
    // openHome()
    openLoginScreen()
  }

  render() {
    return null
  }
}
