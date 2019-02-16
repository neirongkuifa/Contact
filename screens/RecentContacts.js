import React from 'react'
import { FlatList, View, Text } from 'react-native'
import { connect } from 'react-redux'
import store from '../redux/store'
import Row from '../Row'

class RecentContacts extends React.PureComponent {
  static navigationOptions = {
    headerTitle: 'Recently Added',
    headerTintColor: '#D7B740',
    headerStyle: {
      backgroundColor: '#7F0010'
    }
  }

  handleDetails = contact => {
    this.props.navigation.navigate('ContactDetailsScreen', {
      contact: contact,
      randContact: this.randContact
    })
  }
  renderItem = obj => {
    return <Row {...obj.item} handleDetails={this.handleDetails} />
  }
  randContact = () => {
    return this.props.contacts[
      Math.floor(Math.random() * this.props.contacts.length)
    ]
  }

  render() {
    if (this.props.recent.length === 0) {
      return (
        <View
          style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Text style={{ color: 'gray' }}>Temporarily Empty</Text>
        </View>
      )
    }

    return (
      <View>
        <FlatList
          data={this.props.recent}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.key.toString()}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({ recent: state.recent })
export default connect(mapStateToProps)(RecentContacts)
