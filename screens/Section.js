import React from 'react'
import { SectionList, View, Text, Button, TouchableOpacity } from 'react-native'
import Row from '../Row.js'
import { connect } from 'react-redux'

class Section extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Contacts',
    headerTintColor: '#D7B740',
    headerStyle: {
      backgroundColor: '#7F0010'
    },
    headerRight: (
      <TouchableOpacity
        onPress={() => {
          console.log(Object.keys(this))
          navigation.navigate('AddContactScreen')
        }}>
        <Text
          style={{
            fontSize: 17,
            color: '#D7B740',
            marginRight: 10,
            fontWeight: 'bold'
          }}>
          Add
        </Text>
      </TouchableOpacity>
    )
  })
  sectionize = contacts => {
    var Groups = contacts.reduce((groups, contact) => {
      let InitFirst = contact.name[0].toUpperCase()
      InitFirst in groups
        ? groups[InitFirst].push(contact)
        : (groups[InitFirst] = [contact])
      return groups
    }, {})
    return Object.keys(Groups)
      .sort()
      .map(key => ({
        title: key,
        data: Groups[key].sort((a, b) => a.name > b.name)
      }))
  }

  renderSectionHeader = obj => {
    return (
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
        {obj.section.title}
      </Text>
    )
  }
  renderItem = obj => {
    return <Row {...obj.item} handleDetails={this.handleDetails} />
  }
  randContact = () => {
    return this.props.contacts[
      Math.floor(Math.random() * this.props.contacts.length)
    ]
  }
  handleDetails = contact => {
    this.props.navigation.navigate('ContactDetailsScreen', {
      contact: contact,
      randContact: this.randContact
    })
  }
  render() {
    const sections = this.sectionize(this.props.contacts)
    return (
      <View>
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={sections}
          keyExtractor={(item, index) => item.key.toString()}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({ contacts: state.contacts })
export default connect(mapStateToProps)(Section)
