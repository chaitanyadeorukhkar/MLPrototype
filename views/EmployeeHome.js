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

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
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