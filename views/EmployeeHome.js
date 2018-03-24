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
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default class EmployeeHome extends Component {
  constructor(props) {
    super(props);
    mainscreen = this;
    this.state = {
      showButtons: false
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
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
          onTabChange={newTabIndex =>
            alert(`New Tab at position ${newTabIndex}`)
          }
        >
          <Tab
            barBackgroundColor="#37474F"
            label="Movies & TV"
            icon={<Icon size={24} color="white" name="tv" />}
          />
          <Tab
            barBackgroundColor="#00796B"
            label="Music"
            icon={<Icon size={24} color="white" name="music-note" />}
          />
        </BottomNavigation>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              color: "#5478e4",
              fontWeight: "bold",
              fontSize: 25,
              paddingTop: "30%"
            }}
          >
            Machine Learning
          </Text>
        </View>
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
