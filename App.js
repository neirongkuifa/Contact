/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from "react";
import { Keyboard } from "react-native";
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import AddContact from "./screens/AddContact";
import Section from "./screens/Section";
import ContactDetails from "./screens/ContactDetails";
import Login from "./screens/Login";
import RecentContact from "./screens/RecentContacts";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { fetchUsers } from "./api.js";
import { Provider } from "react-redux";
import store from "./redux/store";

const ContactNavigator = createStackNavigator(
  {
    AddContactScreen: AddContact,
    SectionScreen: Section,
    ContactDetailsScreen: ContactDetails
  },
  {
    initialRouteName: "SectionScreen"
  }
);
class ContactWrapperNavigator extends React.Component {
  static router = ContactNavigator.router;
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons name={`ios-contacts`} size={40} color={tintColor} />
    )
  };

  componentDidMount() {
    fetchUsers().then(result => {
      this.setState({
        contacts: result
      });
    });
  }

  render() {
    const { navigation } = this.props;
    return <ContactNavigator navigation={navigation} />;
  }
}
const RecentNavigator = createStackNavigator(
  {
    RecentScreen: RecentContact,
    ContactDetailsScreen: ContactDetails
  },
  {
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <MaterialIcons name="history" size={40} color={tintColor} />
      )
    }
  }
);

const MainNavigator = createBottomTabNavigator(
  {
    TabOne: ContactWrapperNavigator,
    TabTwo: RecentNavigator
  },
  {
    tabBarOptions: {
      activeTintColor: "#D7B740",
      showLabel: false
    }
  }
);
const AppNavigator = createSwitchNavigator(
  {
    LoginScreen: Login,
    MainScreen: MainNavigator
  },
  {
    initialRouteName: "LoginScreen"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
