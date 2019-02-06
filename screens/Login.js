import React from "react";
import { View, Text, Button } from "react-native";

export default class Login extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("MainScreen")}
        />
      </View>
    );
  }
}
