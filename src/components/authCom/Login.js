import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { appColors, appDimens, appTextSize } from '../../helpers/Constants';
import ValidationComponent from '../../helpers/ValidationComponent';
import Styles from '../../helpers/Styling'
import navigation from '../../routers/navigation'
import firebase from 'firebase'

export default class Login extends ValidationComponent {

  state = {
    email: "haider@gmail.com",
    password: "123456",
    authenticating: false,
  }

  onPressSignIn() {
    this.setState({
      authenticating: true,
    });

    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((data) => {
        console.log("Login Success")

        this.setState({
          authenticating: false
        })

        if (data.user.emailVerified == false) {
          Alert.alert(
            'Authentication Failure',
            "Your email is not verified.",
            [
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
          )
        }

      })
      .catch((error) => {
        console.log("LoginError", error)
        this.setState({
          authenticating: false,
        })

        let errorMessage = error.message;
        Alert.alert(
          'Authentication Failure',
          errorMessage,
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false }
        )
      })
  }

  renderCurrentState() {
    if (this.state.authenticating) {
      return (
        <View style={styles.form}>
          <ActivityIndicator size='large' color={appColors.white} />
        </View>
      )
    }

    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1, backgroundColor: appColors.primary }} >

        <View style={styles.topLayout}>
          <Text style={styles.signIn}>Login</Text>
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

          <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
            <View style={styles.loginButtonStyle}>
              <TouchableOpacity
                style={styles.submit}
                onPress={() => {
                  if (this.validate({
                    password: { minlength: 5, maxlength: 20, required: true },
                    email: { email: true },
                  })) {
                    this.onPressSignIn()
                  }
                }}
                underlayColor={appColors.white}>
                <Text style={{ color: appColors.primary, textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>Sign In</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.loginButtonStyle}>
              <TouchableOpacity
                style={styles.submit}
                onPress={() => {
                  // navigation.navigate('BottomTabsRouter');
                }}
                underlayColor={appColors.white}>
                <Text style={{ color: appColors.primary, textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>Sign In With Google</Text>
              </TouchableOpacity>

            </View>

          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Signup');
              }}
              underlayColor={appColors.blue}>
              <Text>No Account Yet? Register</Text>
            </TouchableOpacity>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ForgotPassword');
                }}
                underlayColor={appColors.blue}>
                <Text>Forgot password?</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>

      </ScrollView>
    )
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        {this.renderCurrentState()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.primary,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  loginButtonStyle: {
    marginTop: 10,
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
    width: '100%',
    padding: 15,
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

export const openLoginScreen = () => navigation.navigate('Login')
