/*
  Switcher between Main and Auth stacks
 */
import { createSwitchNavigator } from 'react-navigation'

import RootResolver from './RootResolver'
import AuthStack from '../Stacks/AuthStack'
import HomeStack from '../Stacks/HomeStack'

export default createSwitchNavigator({
  RootResolver,
  AuthStack,
  HomeStack,  
})
