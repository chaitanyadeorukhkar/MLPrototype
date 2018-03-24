import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  LayoutAnimation
} from "react-native";
import Btn from "react-native-micro-animated-button";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import Dashboard from './Dashboard'
import Feed from './Feed'
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default class EmployeeHome extends Component {
  constructor(props) {
    super(props);
    mainscreen = this;
    this.state = {
      showButtons: false,
      tabIndex: 0
    };
  }

  componentDidMount() {}
  componentWillUpdate(){
    LayoutAnimation.easeInEaseOut()
  }
  render;
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {this.state.tabIndex === 0 ? <Dashboard /> : <Feed />}
        </View>
        <BottomNavigation
          labelColor="white"
          rippleColor="white"
          style={{
            height: 56,
            elevation: 8,
            position: "absolute",
            left: 0,
            bottom: 0,
            right: 0
          }}
          onTabChange={
            newTabIndex => this.setState({ tabIndex: newTabIndex })
            //alert(`New Tab at position ${newTabIndex}`)
          }
        >
          <Tab
            barBackgroundColor="royalblue"
            label="Dashboard"
            icon={<Icon size={24} color="white" name="person" />}
          />
          <Tab
            barBackgroundColor="#3399CC"
            label="Feed"
            icon={<Icon size={24} color="white" name="web" />}
          />
        </BottomNavigation>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

module.exports = EmployeeHome;
