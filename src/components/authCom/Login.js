import React from 'react';
import { View, TextInput, Text, StyleSheet, SafeAreaView, TouchableHighlight } from 'react-native';
import { appColors, appDimens, appTextSize } from '../../helpers/Constants';
import ActivityIndicatorProgress from '../../helpers/ActivityIndicatorProgress'
import ValidationComponent from '../../helpers/ValidationComponent';
import Styles from '../../helpers/Styling'
import navigation from '../../routers/navigation'
import moveToBottom from '../../helpers/moveToBottom'

export default class Login extends ValidationComponent {

  state = {
    email: "ihaiderali.arif@gmail.com",
    password: "12345678",
    loading: false,
    error: '',
    success: false
  }

  render() {

    const { navigation, loading } = this.props;

    // display login screen
    return (

      <SafeAreaView style={{ flex: 1, backgroundColor: appColors.primary }} >

        {loading && <ActivityIndicatorProgress />}

        <View style={styles.topLayout}>
          <Text style={styles.signIn}>Sign In</Text>
        </View>

        <View style={styles.loginForm} >

          {this.props.error ? <Text style={styles.errorText}> {this.props.error} </Text> : null}

          <TextInput
            placeholder={'email'}
            placeholderTextColor={appColors.white}
            style={styles.editText}
            onChangeText={(text) => { this.setState({ email: text }, this.resetState()) }}
            value={this.state.email} />

          <View style={styles.lineStyle} />

          {this.isFieldInError('email') && this.getErrorsInField('email').map(errorMessage => <Text style={Styles.errorTextStyle}>{errorMessage}</Text>)}

          <TextInput
            placeholder={'password'}
            placeholderTextColor={appColors.white}
            style={styles.editText}
            onChangeText={(text) => { this.setState({ password: text }, this.resetState()) }}
            value={this.state.password}
            secureTextEntry={true} />

          <View style={styles.lineStyle} />

          {this.isFieldInError('password') && this.getErrorsInField('password').map(errorMessage => <Text style={Styles.errorTextStyle}>{errorMessage}</Text>)}

          <View style={styles.buttonStyle}>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => {
                if (this.validate({
                  password: { minlength: 5, maxlength: 20, required: true },
                  email: { email: true },
                })) {
                  navigation.navigate('HomeScreen');
                }
              }}
              underlayColor={appColors.white}>
              <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableHighlight>

          </View>

          <View style= {{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
            <TouchableHighlight
              onPress={() => {
                navigation.navigate('Signup');
              }}
              underlayColor={appColors.white}>
              <Text>Sign up</Text>
            </TouchableHighlight>
          </View>

        </View>

        <View style={{ flex: 0.5 }}>
          {
            moveToBottom(

              <TouchableHighlight
                onPress={() => {
                  navigation.navigate('ForgotPassword');
                }}
                underlayColor={appColors.white}>
                <Text style={styles.bottomButtonStyle}>Forgot your password?</Text>
              </TouchableHighlight>

            )
          }
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.white,
    justifyContent: 'center',
  },
  topLayout: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImage: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    flex: 3,
    marginTop: 20,
    marginRight: '15%',
    marginLeft: '15%',
  },
  signIn: {
    color: appColors.white,
    fontSize: appTextSize.largeText.fontSize,
  },
  errorText: {
    color: appColors.white,
    fontSize: 16,
    textAlign: 'center',
  },
  editText: {
    marginTop: 25,
    height: 50,
    paddingLeft: 10,
    fontSize: appDimens.eighteen,
    color: appColors.white,
  },
  lineStyle: {
    height: 1,
    backgroundColor: appColors.white,
    marginLeft: 10,
  },
  buttonStyle: {
    marginTop: 40,
    marginLeft: 10,
    backgroundColor: appColors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submit: {
    borderRadius: 10,
    width: '99%',
    padding: 12,
  },

  buttonText: {
    color: appColors.primary,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  bottomButtonStyle: {
    padding: 5,
    color: appColors.grayColor,
    textAlign: 'center',
    fontSize: 15,
  },
});

// export default connect(mapStateToProps, mapDispatchToProps
// )(Login)

export const openLoginScreen = () => navigation.navigate('Login')



