import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  LayoutAnimation,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Btn from "react-native-micro-animated-button";
import { Actions, ActionConst } from "react-native-router-flux";
import AnimatedBar from "react-native-animated-bar";
import { List, ListItem, CardItem, Card, Thumbnail, Button } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default class ManagerFeed extends Component {
  constructor(props) {
    super(props);
    mainscreen = this;
    this.state = {
      showButtons: false,
      analyze: true,
      card1: false,
      card2: false,
      card3: false
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#4E342E"
          barStyle="light-content"
          translucent={true}
          animated={true}
          showHideTransition="slide"
        />
        
        <ScrollView
          style={{
            marginBottom: "13%",
            padding: "2%",
            flex: 1,
            width: width,
            marginTop: "5%"
          }}
        >
          <View style={{ marginBottom: "5%" }}>
            <Text style={{ fontSize: 20, paddingBottom: "1%" }}>
              My employees:
            </Text>
            <Card>
              <CardItem
                stlye={{
                  width: width,
                  height: 50,
                  padding: "5%",
                  flex: 1
                }}
              >
                <View style={{ flex: 1, paddingBottom: "3%" }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      width: "100%",
                      height: 20
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      width: "100%",
                      alignItems: "center"
                    }}
                  >
                    <Thumbnail
                      ref="thumbnail"
                      size={40}
                      source={require("../images/pv.jpg")}
                    />
                    <Text style={{ paddingLeft: "2%" }}>
                      Prasad Vagal completed the Java course
                    </Text>
                  </View>
                  <Text style={{ fontSize: 10, paddingLeft: "15%" }}>
                    {" "}
                    23-03-2018, 01:49 pm
                  </Text>
                </View>
              </CardItem>
              <CardItem>
                <View
                  style={{
                    width: "100%",
                    justifyContent: "flex-end",
                    alignItems: "flex-end"
                  }}
                >
                  <Icon
                    size={24}
                    color={this.state.card1 ? "royalblue" : "grey"}
                    name="thumb-up"
                    onPress={() => {
                      this.setState({ card1: !this.state.card1 });
                    }}
                  />
                </View>
              </CardItem>
            </Card>
            <Card>
              <CardItem
                stlye={{
                  width: width,
                  height: 50,
                  padding: "5%",
                  flex: 1
                }}
              >
                <View style={{ flex: 1, paddingBottom: "3%" }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      width: "100%",
                      height: 20
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      width: "100%",
                      alignItems: "center"
                    }}
                  >
                    <Thumbnail
                      ref="thumbnail"
                      size={40}
                      source={require("../images/empty.jpg")}
                    />
                    <Text style={{ paddingLeft: "2%" }}>
                      Sanjeet Mukadam completed the Kotlin course
                    </Text>
                  </View>
                  <Text style={{ fontSize: 10, paddingLeft: "15%" }}>
                    {" "}
                    22-03-2018, 05:19 pm
                  </Text>
                </View>
              </CardItem>
              <CardItem>
                <View
                  style={{
                    width: "100%",
                    justifyContent: "flex-end",
                    alignItems: "flex-end"
                  }}
                >
                  <Icon
                    size={24}
                    color={this.state.card2 ? "royalblue" : "grey"}
                    name="thumb-up"
                    onPress={() => {
                      this.setState({ card2: !this.state.card2 });
                    }}
                  />
                </View>
              </CardItem>
            </Card>
            <Card>
              <CardItem
                stlye={{
                  width: width,
                  height: 50,
                  padding: "5%",
                  flex: 1
                }}
              >
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      width: "100%",
                      height: 20
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      width: "100%",
                      alignItems: "center"
                    }}
                  >
                    <Thumbnail
                      ref="thumbnail"
                      size={40}
                      source={require("../images/cd.jpg")}
                    />
                    <Text style={{ paddingLeft: "2%" }}>
                      Chaitanya Deorukhkar completed the Java course
                    </Text>
                  </View>
                  <Text style={{ fontSize: 10, paddingLeft: "15%" }}>
                    {" "}
                    22-03-2018, 11:34 am
                  </Text>
                </View>
              </CardItem>
              <CardItem>
                <View
                  style={{
                    width: "100%",
                    justifyContent: "flex-end",
                    alignItems: "flex-end"
                  }}
                >
                  <Icon
                    size={24}
                    color={this.state.card3 ? "royalblue" : "grey"}
                    name="thumb-up"
                    onPress={() => {
                      this.setState({ card3: !this.state.card3 });
                    }}
                  />
                </View>
              </CardItem>
            </Card>
          </View>
        </ScrollView>
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
