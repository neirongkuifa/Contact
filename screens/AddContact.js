import React from 'react'
import { connect } from 'react-redux'
import { addContact, addRecent } from '../redux/actions'
import {
  TextInput,
  View,
  Text,
  Button,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native'

class AddContact extends React.Component {
  static navigationOptions = navigation => ({
    headerTitle: 'Adding Contact',
    headerTintColor: '#D7B740',
    headerStyle: {
      backgroundColor: '#7F0010'
    },
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold'
    }
  })
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      isFormValid: false
    }
    this.handleName = this.handleName.bind(this)
    this.handlePhone = this.handlePhone.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidUpdate(prevProps, prevState) {
    const names = this.state.name.split(' ')
    if (
      prevState.name !== this.state.name ||
      prevState.phone !== this.state.phone
    ) {
      if (
        !isNaN(this.state.phone) &&
        this.state.phone.length === 10 &&
        this.state.name.length >= 3 &&
        names[0] &&
        names[1]
      ) {
        this.setState({
          isFormValid: true
        })
      } else {
        this.setState({
          isFormValid: false
        })
      }
    }
  }
  handleName(text) {
    this.setState({
      name: text
    })
  }
  handlePhone(text) {
    if (!isNaN(text) && text.length <= 10) {
      this.setState({
        phone: text
      })
    }
  }
  handleSubmit() {
    const phone = this.state.phone
    const key = this.props.nextId
    const contact = {
      key,
      name: this.state.name,
      phone: `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6)}`
    }
    this.props.addContact(contact)
    this.props.addRecent(contact)
    this.props.navigation.goBack()
  }
  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          paddingTop: 30
        }}>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={this.state.name}
          onChangeText={this.handleName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Phone"
          value={this.state.phone}
          onChangeText={this.handlePhone}
          keyboardType="numeric"
        />
        <Button
          title="Add Contact"
          disabled={!this.state.isFormValid}
          onPress={this.handleSubmit}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 35,
    fontSize: 20,
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
})
const mapState = state => ({ nextId: state.contacts.length })
const mapDispatch = {
  addContact,
  addRecent
}
export default connect(
  mapState,
  mapDispatch
)(AddContact)
