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
export default class Home extends Component {
  constructor(props) {
    super(props);
    mainscreen = this;
    this.state = {
      showButtons: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      this.setState({ showButtons: true });
    }, 500);
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
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
          <Text
            style={{
              color: "#a0b4f0",
              fontWeight: "bold",
              fontSize: 25,
              paddingTop: "1%",
              alignItems: "flex-end"
            }}
          >
            - Prototype
          </Text>
        </View>
        {this.state.showButtons ? (
          <View
            style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
          >
            <Btn
              foregroundColor={"royalblue"}
              maxWidth={width * 0.9}
              bounce={true}
              renderLabel={
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "royalblue" }}>Login as </Text>
                  <Text style={{ color: "royalblue", fontWeight: "bold" }}>
                    Employee{" "}
                  </Text>
                </View>
              }
              onPress={() => this.b1.load()}
              ref={ref => (this.b1 = ref)}
            />
            <Btn
              foregroundColor={"royalblue"}
              maxWidth={width * 0.9}
              bounce={true}
              renderLabel={
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "royalblue" }}>Login as </Text>
                  <Text style={{ color: "royalblue", fontWeight: "bold" }}>
                    Manager{" "}
                  </Text>
                </View>
              }
              onPress={() => this.b2.load()}
              ref={ref => (this.b2 = ref)}
            />
          </View>
        ) : (
          <View
            style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
          />
        )}
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
