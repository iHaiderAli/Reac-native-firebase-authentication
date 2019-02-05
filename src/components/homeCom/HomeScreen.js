import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight } from 'react-native';
import { appColors } from '../../helpers/Constants'
import Styling from '../../helpers/Styling'
import navigation from '../../routers/navigation'

export default class HomeScreen extends PureComponent {

  render() {

    return (

      <SafeAreaView>
        <Text>Home Screen</Text>
        <View>
          <TouchableHighlight
            style={Styling.submit}
            onPress={() => {
              navigation.navigate('AboutScreen');
            }}
            underlayColor={appColors.white}>
            <Text>go forward to About Screen</Text>
          </TouchableHighlight>
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