import { Component } from 'react'
import { openLoginScreen } from '../components/authCom/Login'
import { openHome } from '../routes/BottomTabsRouter'
import { Cache } from "react-native-cache";
import { AsyncStorage } from 'react-native';

var cache = new Cache({
  namespace: "Routers",
  policy: {
    maxEntries: 50000
  },
  backend: AsyncStorage
});


export default class RootResolver extends Component {

  constructor() {
    super()

    cache.getItem("hello", function (err, value) {
      console.log(value);
      if (value != null && value != "") {
        openHome()
      } else {
        openLoginScreen()
      }
    });
  }

  render() {
    return null
  }
}
