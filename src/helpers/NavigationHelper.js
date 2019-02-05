import { NavigationActions } from 'react-navigation'

class NavigationHelper {
  set navigator(navigator) {
    this._navigator = navigator
  }

  get navigator() {
    return this._navigator
  }

  navigate(routeName, params) {
    this._navigator.dispatch(
      NavigationActions.navigate({
        type: 'Navigation/NAVIGATE',
        routeName,
        params
      })
    )
  }
  
  goToLoginScreen() {
    this.navigate('Login')
  }
}

export default new NavigationHelper()
