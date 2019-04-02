import { createBottomTabNavigator } from 'react-navigation'
import React from 'react'
import { Image, StyleSheet } from 'react-native';
import { appColors, appIcons, appDimens, appTexts} from '../helpers/Constants';

import ChatScreen from '../fragments/ChatScreen'
import HomeScreen from '../fragments/HomeScreen'
import LocationScreen from '../fragments/LocationScreen'
import navigation from '../routers/navigation'

export default createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: appTexts.tabLabel1,
      tabBarIcon: () => (
        <Image source={appIcons.homeIconWhite}
          style={styles.circleLogoStyle}>
        </Image>
      )
    }
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      tabBarLabel: appTexts.tabLabel2,
      tabBarIcon: () => (
        <Image source={appIcons.messagesWhiteIcon}
          style={styles.circleLogoStyle}>
        </Image>
      )
    }
  },
  Location: {
    screen: LocationScreen,
    navigationOptions: {
      tabBarLabel: appTexts.tabLabel3,
      tabBarIcon: () => (
        <Image source={appIcons.locationIcon}
          style={styles.circleLogoStyle}>
        </Image>
      )
    }
  }

}, {
    initialRouteName: appTexts.tabLabel1,
    order: [appTexts.tabLabel1, appTexts.tabLabel2, appTexts.tabLabel3],

    navigationOptions: {
      tabBarVisible: true,
    },
    tabBarOptions: {
      upperCaseLabel: false,
      showIcon: true,
      activeBackgroundColor: appColors.white,
      inactiveBackgroundColor: appColors.grayColor2,
      style: {
        backgroundColor: appColors.transparentColor,
        height: appDimens.fifty,
      },
      labelStyle: {
        fontSize: appDimens.fifteen,
        color: appColors.black,
      },
    },
    tabBarPosition: appTexts.bottomText,

  });

const styles = StyleSheet.create({

  circleLogoStyle: {
    height: appDimens.twentyFive,
    width: appDimens.twentyFive,
    marginTop: appDimens.five,
    alignSelf: appTexts.centerText,
    aspectRatio: appDimens.two,
    resizeMode: appTexts.resizeContain
  },

})
export const openHome = () => navigation.navigate('BottomTabsRouter')

