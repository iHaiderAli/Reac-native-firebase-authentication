import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Styling from '../../helpers/Styling'

export default class ProfileScreen extends PureComponent {

  render() {

    return (

      <SafeAreaView style={styles.outerContainer}>

        <View style={Styling.innerContainer}>

          <Text style={styles.textStyle}>
            Profile Screen
          </Text>

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
