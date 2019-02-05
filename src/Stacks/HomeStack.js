import { createStackNavigator } from 'react-navigation'
import { StackViewStyleInterpolator } from 'react-navigation-stack'

import HomeScreen from '../components/homeCom/HomeScreen'
import AboutScreen from '../components/homeCom/AboutScreen'
import ProfileScreen from '../components/homeCom/ProfileScreen'

import {appColors} from '../helpers/Constants'

export default createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    AboutScreen: { screen: AboutScreen },
    ProfileScreen: { screen: ProfileScreen },    
  },
  {
    // initialRouteName: 'HomeScreen',
    headerMode: 'none',
    cardStyle: { backgroundColor: appColors.white },
    navigationOptions: { gesturesEnabled: false },
    transitionConfig: () => ({
      screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    }),
  },
)
