import React from 'react'
import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Alert
} from 'react-native'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.login = this.login.bind(this)
  }
  async login() {
    const response = await fetch('http://192.168.0.44:8000', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    if (true) {
      this.props.navigation.navigate('MainScreen')
      return
    } else {
      const errMsg = await response.text()
      Alert.alert(
        'Login Failed',
        errMsg,
        [{ text: 'OK' }, { text: 'Cancel' }],
        { cancelable: false }
      )
    }
  }
  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1, justifyContent: 'center' }}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Username: </Text>
          <TextInput
            style={styles.input}
            value={this.state.username}
            onChangeText={text => this.setState({ username: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Password: </Text>
          <TextInput
            style={styles.input}
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry={true}
          />
        </View>
        <Button title="Login" onPress={this.login} />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    width: 120,
    fontWeight: 'bold'
  },
  input: {
    fontSize: 20,
    width: 200,
    borderWidth: 1,
    borderColor: 'black'
  },
  inputContainer: {
    flexDirection: 'row',
    margin: 10
  }
})
