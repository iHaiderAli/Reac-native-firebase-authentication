import { createStackNavigator } from 'react-navigation'

import RootSwitch from '../routers/RootSwitch'

export default createStackNavigator(
  {
    RootSwitch,    
  },
  {
    mode: 'modal',
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: { duration: 0 },
      screenInterpolator: () => {}, // tslint:disable-line
    }),
    cardStyle: { backgroundColor: 'transparent' },
  },
)
