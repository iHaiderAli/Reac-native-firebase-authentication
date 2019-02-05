import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { appColors, appTexts } from './Constants';

class ActivityIndicatorRed extends Component {
   
   state = { animating: true }

   closeActivityIndicator = () => setTimeout(() => this.setState({
      animating: false
   }), 60000)

   componentDidMount = () => this.closeActivityIndicator()
   render() {
      const animating = this.state.animating
      return (
         <View style={styles.activityIndicator} >
            <ActivityIndicator
               animating={animating}
               color= {appColors.primary}
               size={appTexts.large}
            />
         </View>
      )
   }
}
export default ActivityIndicatorRed

const styles = StyleSheet.create({

   activityIndicator: {
      position: appTexts.absolute,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: appTexts.centerText,
      justifyContent: appTexts.centerText
   }
})