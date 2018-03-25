import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  LayoutAnimation,
  StatusBar,
  ScrollView
} from "react-native";
import Btn from "react-native-micro-animated-button";
import { Actions } from "react-native-router-flux";
import AnimatedBar from "react-native-animated-bar";
import { List, ListItem, CardItem, Card, Thumbnail } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default class Dashboard extends Component {
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
        <StatusBar
          backgroundColor="#5478e4"
          barStyle="light-content"
          translucent={true}
          animated={true}
          showHideTransition="slide"
        />
        <View
          style={{
            flex: 1,
            width: width,
          }}
        >
          <View
            style={{ width: width, alignItems: "center",height:'27%' }}
          >
            <Thumbnail
              ref="thumbnail"
              size={100}
              source={require("../images/pv.jpg")}
              style={{ transform: [{ scale: 2 }], marginTop: "15%" }}
            />
             <View
            style={{ width: width, alignItems: "center", marginTop: "10%" }}
          >
            <Text style={{ fontSize: 20, color: "#283593" }}>Prasad Vagal</Text>
          </View>
          </View>

         
          <View style={{ width: width, alignItems: "flex-start", paddingLeft:'2%'}}>
            <Text style={{ fontSize: 17 }}>Skills: </Text>
          </View>
          <View
            style={{
              width: width,
              alignItems: "flex-start",
              paddingLeft: "2%"
            }}
          >
            <Text style={{ color: "black" }}>React JS, Android SDK, PHP</Text>
          </View>
          <View
            style={{ width: width, alignItems: "flex-start", paddingTop: "2%",  paddingLeft:'2%' }}
          >
            <Text style={{ fontSize: 17 , }}>Skills acquired:</Text>
          </View>
          <View
            style={{
              width: width,
              alignItems: "flex-start",
              paddingLeft: "2%",
              paddingBottom:'5%'
            }}
          >
            <Text style={{ color: "black" }}>C++</Text>
          </View>
          <ScrollView>
            <Text
              style={{
                color: "#1c1c1c",
                fontWeight: "bold",
                fontSize: 20,
                marginBottom: "2%"
              }}
            >
              My courses:
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
                  >
                    <Text>Java (7 out of 10 complete)</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      width: "100%",
                      height: 20
                    }}
                  >
                    <View style={{ flex: 3, backgroundColor: "#4CAF50" }} />
                    <View style={{ flex: 1, backgroundColor: "#E0E0E0" }} />
                    <Icon
                      size={24}
                      color="black"
                      name="keyboard-arrow-right"
                      style={{ marginLeft: "2%" }}
                    />
                  </View>
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
                  >
                    <Text>C++ (10 out of 10 complete)</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      width: "100%",
                      height: 20
                    }}
                  >
                    <View style={{ flex: 1, backgroundColor: "#8C9EFF" }} />
                    <Icon
                      size={24}
                      color="royalblue"
                      name="done"
                      style={{ marginLeft: "2%" }}
                    />
                  </View>
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
                  >
                    <Text>Blockchain (7 out of 10 complete)</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      width: "100%",
                      height: 20
                    }}
                  >
                    <View style={{ flex: 4, backgroundColor: "#4CAF50" }} />
                    <View style={{ flex: 5, backgroundColor: "#E0E0E0" }} />
                    <Icon
                      size={24}
                      color="black"
                      name="keyboard-arrow-right"
                      style={{ marginLeft: "2%" }}
                    />
                  </View>
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
                  >
                    <Text>Tensor Flow (9 out of 10 complete)</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      width: "100%",
                      height: 20
                    }}
                  >
                    <View style={{ flex: 10, backgroundColor: "#4CAF50" }} />
                    <View style={{ flex: 1, backgroundColor: "#E0E0E0" }} />
                    <Icon
                      size={24}
                      color="black"
                      name="keyboard-arrow-right"
                      style={{ marginLeft: "2%" }}
                    />
                  </View>
                </View>
              </CardItem>
            </Card>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  rowText: {
    marginRight: 20
  },
  row: {
    flexDirection: "row"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  barText: {
    backgroundColor: "transparent",
    color: "#FFF"
  }
});
