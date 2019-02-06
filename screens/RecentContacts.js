import React from "react";
import { Text } from "react-native";

export default class RecentContacts extends React.Component {
  static navigationOptions = {
    headerTitle: "Recently Checked",
    headerTintColor: "#D7B740",
    headerStyle: {
      backgroundColor: "#7F0010"
    }
  };
  render() {
    return <Text>Good</Text>;
  }
}
