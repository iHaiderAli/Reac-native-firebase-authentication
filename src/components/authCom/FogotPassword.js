import React, { PureComponent } from 'react';
import { Text, View, SafeAreaView, TouchableHighlight } from 'react-native';
import { appColors } from '../../helpers/Constants'
import Styling from '../../helpers/Styling'

export default class ForgotPassword extends PureComponent {

  render() {

    const { navigation } = this.props;

    return (

      <SafeAreaView>
        <View style={Styling.innerContainer}>

          <Text style={Styling.textStyle}>
            Forgot Password Screen
          </Text>

          <View>
            <TouchableHighlight
              style={Styling.submit}
              onPress={() => {
                navigation.navigate('Login');
              }}
              underlayColor={appColors.white}>
              <Text>go back to Login Screen</Text>
            </TouchableHighlight>
          </View>

        </View>
      </SafeAreaView>
    );
  }
}