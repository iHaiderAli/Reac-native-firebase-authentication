import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableHighlight, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { appColors, appDimens, appTextSize } from '../../helpers/Constants';
import ValidationComponent from '../../helpers/ValidationComponent';
import Styles from '../../helpers/Styling'
import navigation from '../../routers/navigation'
import moveToBottom from '../../helpers/moveToBottom'
import firebase from 'firebase'

export default class SignUp extends ValidationComponent {

  state = {
    name: "",
    email: "",
    password: "",
    username: "",
    phoneno: "",
    authenticating: false,
  }

  onPressSignUp() {

    const { email, password } = this.state;

    if (this.validate({
      name: { required: true },
      username: { required: true },
      phoneno: { required: true },
      password: { required: true },
      email: { email: true },
    })) {
      this.setState({
        authenticating: true,
      });

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((data) => {
          console.log("User ID :- ", data.user.uid);

          firebase.database().ref('users/' + data.user.uid).set({
            email: email,
            name: this.state.name,
            username: this.state.username,
            phone: this.state.phoneno
          }).then(() => {

            this.setState({
              authenticating: false,
            })

            firebase.auth().currentUser.sendEmailVerification().then(function () {

              console.log('signupRequest', "Email sent")
              let succesMsg = "An email sent to your email address please confirm it before login.";
              let title = 'You have signed up successfully';
              // this.showAlertMessage(title, succesMsg, true)
              Alert.alert(
                title,
                succesMsg,
                [
                  {
                    text: 'OK', onPress: () => {
                      navigation.navigate("Login")
                    }
                  },
                ],
                { cancelable: false }
              )
            }, function (error) {
              console.log('signupRequest', "Email not sent")
            });
          }).catch((error) => {
            this.setState({
              authenticating: false,
            })

            console.log("signUp Error", error)
            let errorMessage = error.message;
            let title = "Signup failed";
            this.showAlertMessage(title, errorMessage, false)

          })
        })
        .catch(error => {
          this.setState({
            authenticating: false,
          })

          console.log("signUp Error", error)
          let errorMessage = error.message;
          let title = "Signup failed";
          this.showAlertMessage(title, errorMessage, false)

        });
    }
  }

  showAlertMessage = (title, message, navigate) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: 'OK', onPress: () => {
            if (navigate) {
              navigation.navigate("Login")
            }
          }
        },
      ],
      { cancelable: false }
    )
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
          <Text style={styles.signIn}>Register</Text>
        </View>

        <View style={styles.loginForm} >

          {this.props.error ? <Text style={styles.errorText}> {this.props.error} </Text> : null}

          <TextInput
            placeholder={'name'}
            placeholderTextColor={appColors.white}
            style={styles.editText}
            onChangeText={(text) => { this.setState({ name: text }, this.resetState()) }}
            value={this.state.name.trim()} />

          <View style={styles.lineStyle} />

          {this.isFieldInError('name') && this.getErrorsInField('name').map(errorMessage => <Text style={Styles.errorTextStyle}>{errorMessage}</Text>)}

          <TextInput
            placeholder={'username'}
            placeholderTextColor={appColors.white}
            style={styles.editText}
            onChangeText={(text) => { this.setState({ username: text }, this.resetState()) }}
            value={this.state.username.trim()}
          />

          <View style={styles.lineStyle} />

          {this.isFieldInError('username') && this.getErrorsInField('username').map(errorMessage => <Text style={Styles.errorTextStyle}>{errorMessage}</Text>)}

          <TextInput
            placeholder={'email'}
            placeholderTextColor={appColors.white}
            style={styles.editText}
            onChangeText={(text) => { this.setState({ email: text }, this.resetState()) }}
            value={this.state.email}
          />

          <View style={styles.lineStyle} />

          {this.isFieldInError('email') && this.getErrorsInField('email').map(errorMessage => <Text style={Styles.errorTextStyle}>{errorMessage}</Text>)}

          <TextInput
            placeholder={'password'}
            placeholderTextColor={appColors.white}
            style={styles.editText}
            onChangeText={(text) => { this.setState({ password: text }, this.resetState()) }}
            value={this.state.password.trim()}
            secureTextEntry={true} />

          <View style={styles.lineStyle} />

          {this.isFieldInError('password') && this.getErrorsInField('password').map(errorMessage => <Text style={Styles.errorTextStyle}>{errorMessage}</Text>)}

          <TextInput
            placeholder={'phone no'}
            placeholderTextColor={appColors.white}
            style={styles.editText}
            onChangeText={(text) => { this.setState({ phoneno: text }, this.resetState()) }}
            value={this.state.phoneno.trim()}
          />

          <View style={styles.lineStyle} />

          {this.isFieldInError('phoneno') && this.getErrorsInField('phoneno').map(errorMessage => <Text style={Styles.errorTextStyle}>{errorMessage}</Text>)}

          <View style={styles.loginButtonStyle}>
            <TouchableHighlight
              style={styles.submit}
              onPress={() => {
                this.onPressSignUp()
              }}
              underlayColor={appColors.white}>
              <Text style={{ color: appColors.primary, textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>Register</Text>
            </TouchableHighlight>
          </View>

        </View>

        <View style={{ flex: 0.5 }}>
          {
            moveToBottom(

              <TouchableHighlight
                onPress={() => {
                  navigation.navigate('Login');
                }}
                underlayColor={appColors.white}>
                <Text style={styles.bottomButtonStyle}>Already account exist?</Text>
              </TouchableHighlight>

            )
          }
        </View>
      </ScrollView>
    )
  }

  render() {
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
    marginTop: 10,
    marginRight: '7%',
    marginLeft: '7%',
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
    marginTop: 15,
    marginBottom: 15,
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
