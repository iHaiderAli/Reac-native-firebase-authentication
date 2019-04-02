import { createStackNavigator } from 'react-navigation'
import { StackViewStyleInterpolator } from 'react-navigation-stack'

import BottomTabsRouter from '../routes/BottomTabsRouter'
import {appColors} from '../helpers/Constants'

export default createStackNavigator(
  {
    BottomTabsRouter,    
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
