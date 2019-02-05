import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight } from 'react-native';
import Styling from '../../helpers/Styling'
import navigation from '../../routers/navigation'
import { appColors } from '../../helpers/Constants'

export default class AboutScreen extends PureComponent {

  render() {
    return (

      <SafeAreaView>
        <View style={Styling.innerContainer}>

          <Text style={Styling.textStyle}>
            Profile Screen
          </Text>

          <View>
            <TouchableHighlight
              style={Styling.submit}
              onPress={() => {
                navigation.navigate('ProfileScreen');
              }}
              underlayColor={appColors.white}>
              <Text>go forward to Profile Screen</Text>
            </TouchableHighlight>
          </View>

        </View>

      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({

  outerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  innerContainer: {
    backgroundColor: '#FFF',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 0,
    borderWidth: 4,
    borderColor: '#e66125',
  },
  textStyle: {
    fontSize: 30,
    color: '#eb5f33',
    marginBottom: 5
  }

});

