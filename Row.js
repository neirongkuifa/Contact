import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image
} from "react-native";

class Row extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity
        style={{ margin: 5 }}
        onPress={() => this.props.handleDetails(this.props)}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={styles.contactRow}>
            <Text style={styles.name}>{this.props.name}</Text>
            <Text style={styles.phone}>{this.props.phone}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  contactRow: {
    marginLeft: 5,
    flex: 1
  },
  name: {
    fontSize: 20
  },
  phone: {
    fontSize: 15,
    color: "gray"
  }
});

export default Row;
