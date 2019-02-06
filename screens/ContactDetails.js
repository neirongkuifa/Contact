import React from "react";
import { View, Button, Text, Image } from "react-native";

export default class ContactDetails extends React.Component {
  static navigationOptions = {
    headerTitle: "Contact Info",
    headerTintColor: "#D7B740",
    headerStyle: {
      backgroundColor: "#7F0010"
    }
  };
  render() {
    const contact = this.props.navigation.getParam("contact");
    return (
      <View>
        <Text> Name: {contact.name} </Text>
        <Text> Phone: {this.props.navigation.getParam("contact").phone}</Text>
        <Button
          title="Related contact"
          onPress={() =>
            this.props.navigation.push("ContactDetailsScreen", {
              contact: this.props.navigation.getParam("randContact")(),
              randContact: this.props.navigation.getParam("randContact")
            })
          }
        />
      </View>
    );
  }
}
