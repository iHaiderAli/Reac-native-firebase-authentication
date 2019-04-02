import { createStackNavigator } from 'react-navigation'

import Login from '../components/authCom/Login'
import Signup from '../components/authCom/Signup'
import ForgotPassword from '../components/authCom/FogotPassword'
import ConfirmationScreen from '../components/authCom/ConfirmationScreen'

export default createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
    ForgotPassword: { screen: ForgotPassword },   
    ConfirmationScreen: { screen: ConfirmationScreen },   
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    duration: 600,
  },
)

