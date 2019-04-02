import { StyleSheet } from 'react-native';

const appColors = {
  primary: '#e66125',
  primaryDark: '#cb4e1b',
  black: '#423b38',
  red: 'red',
  white: 'white',
  blue: '#2812b6',
  grayColor: '#433c39',
  grayColor2: '#f0eeed',
  dividerColor: '#b1a49e',
  loaderPrimaryDark: '#cb4e1b',
  inActiveTab: '#433c39',
  transparentColor: 'transparent'
};

export { appColors };

const appTextSize = StyleSheet.create({

  largeText: {
    fontSize: 45
  },
  mediumText: {
    fontSize: 25
  },
  smallText: {
    fontSize: 12
  },

});
export { appTextSize };

const appDimens = StyleSheet.create({
  halfOne: 0.5, one: 1, two: 2, twoPFive: 2.5, twoPseven: 2.7,
  three: 3, threePthree: 3.3, four: 4, fourPFive: 4.5,
  five: 5, six: 6, ten: 10, thirteen: 13, forteen: 14, fifteen: 15,
  sixteen: 16, seventeen: 17, eighteen: 18,
  twenty: 20, twentyTwo: 22, twentyFive: 25, thirty: 30,
  thirtyFive: 35, forty: 40, fortyFive: 45,
  fifty: 50, fiftyFive: 55, sixty: 60,
  sixtyFive: 65, seventy: 70, seventyFive: 75,
  eighty: 80, eightyTwo: 82, eightyFive: 85, ninty: 90,
  nintyFive: 95, hundred: 100,
  oneTen: 110, oneTwenty: 120,
  oneTwentyFive: 125, oneThirty: 130,
  oneFortyEight: 148,
  oneFifty: 150, oneNighttyEight: 198, twoHundred: 200,
});
export { appDimens };

const appTexts = {
  tabLabel1: 'Home',
  tabLabel2: 'Chat',
  tabLabel3: 'Location',

  bottomText: 'bottom',
  centerText: 'center',
  resizeContain: 'contain',

};
export { appTexts };

const appIcons = {
  logoMark: require('../../assets/Logo-Mark.png'),
  homeIconWhite: require('../../assets/homeIcon.png'),
  messagesWhiteIcon: require('../../assets/messageIcon.png'),
  locationIcon: require('../../assets/location.png'),
};

export { appIcons };

