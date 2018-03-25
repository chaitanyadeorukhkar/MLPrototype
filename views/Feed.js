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

export default class Feed extends Component {
  constructor(props) {
    super(props);
    mainscreen = this;
    this.state = {
      showButtons: false,
      analyze: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      this.setState({ analyze: false });
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#3399CC"
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
            <Card style={{ padding: "2%" }}>
              <Text style={{ fontSize: 18 }}>Trends:</Text>
              <Text>1. Java (Chaitanya Deorukhkar and 34 others)</Text>
              <Text>2. Android (Sanjeet Mukadam and 23 others)</Text>
              <Text>3. Kotlin (Sanjeet Mukadam and 22 others)</Text>
              <Text>4. C++ (You and 20 others)</Text>
              <Text>5. React JS (Chaitanya Deorukhkar and 15 others)</Text>
            </Card>
            <Card style={{ padding: "2%" }}>
              <Text style={{ fontSize: 18 }}>What should you learn next?</Text>
              {this.state.analyze ? (
                <View
                  style={{
                    flexDirection: "row",
                    paddingTop: "1%",
                    justifyContent: "flex-start",
                    alignItems: "center"
                  }}
                >
                  <ActivityIndicator animating={true} size="small" />
                  <Text style={{ paddingLeft: "2%" }}>Analysing..</Text>
                </View>
              ) : (
                <View style={{flexDirection:'row',padding:'2%'}}>
                  <Button color='royalblue'><Text style={{color:'white',padding:'2%'}}>Kotlin (Click to open course)</Text></Button>
                </View>
              )}
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
