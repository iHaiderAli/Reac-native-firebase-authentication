import { createStackNavigator } from 'react-navigation'
import { StackViewStyleInterpolator } from 'react-navigation-stack'

import AboutScreen from '../components/homeCom/AboutScreen'
import ProfileScreen from '../components/homeCom/ProfileScreen'
import BottomTabsRouter from '../routes/BottomTabsRouter'
import {appColors} from '../helpers/Constants'

export default createStackNavigator(
  {
    BottomTabsRouter,
    AboutScreen: { screen: AboutScreen },
    ProfileScreen: { screen: ProfileScreen },        
  },
  {
    // initialRouteName: 'BottomTabsRouter',
    headerMode: 'none',
    cardStyle: { backgroundColor: appColors.white },
    navigationOptions: { gesturesEnabled: false },
    transitionConfig: () => ({
      screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    }),
  },
)
