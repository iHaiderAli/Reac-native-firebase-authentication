import { createStackNavigator } from 'react-navigation'

import Login from '../components/authCom/Login'
import Signup from '../components/authCom/Signup'
import ForgotPassword from '../components/authCom/FogotPassword'

export default createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
    ForgotPassword: { screen: ForgotPassword },   
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    duration: 600,
  },
)

