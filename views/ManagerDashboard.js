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
  TouchableOpacity
} from "react-native";
import Btn from "react-native-micro-animated-button";
import { Actions, ActionConst } from "react-native-router-flux";
import AnimatedBar from "react-native-animated-bar";
import { List, ListItem, CardItem, Card, Thumbnail, Button } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import SearchBar from "react-native-searchbar";

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
  _handleChangeText(input) {
    if (input.length > 0) {
      this.setState({ searching: true });
    } else {
      this.setState({ searching: false });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#00695C"
          barStyle="light-content"
          translucent={true}
          animated={true}
          showHideTransition="slide"
          hahandleChangeText={this._handleChangeText}
        />
                <View
          style={{
            position: "absolute",
            top: 30,
            bottom: 0,
            right: 5,
            height: 50,
            zIndex: 4
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Actions.home({ type: ActionConst.RESET });
            }}
          >
            <Icon name="exit-to-app" size={30} style={{ color: "black" }} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, marginTop: "15%", width: width }}>
          <SearchBar
            ref={ref => (this.searchBar = ref)}
            showOnLoad
            hideBack
            placeholder="Search a skill"
          />
          <ScrollView
            style={{
              marginBottom: "13%",
              padding: "2%",
              width: width,
              flex: 1,
              marginTop: "15%"
            }}
          >
            {this.state.searching ? null : (
              <View style={{ marginBottom: "5%", width: width }}>
                <List>
                  <ListItem>
                    <Text style={{ color: "black", flex: 3 }}>Meenakshi</Text>
                    <Button
                      rounded
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "2%"
                      }}
                    >
                      <Text style={{ color: "white" }}>Rehire</Text>
                    </Button>
                    <Button
                      rounded
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Text style={{ color: "white" }}>Profile</Text>
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Text style={{ color: "black", flex: 3 }}>Saurav Rout</Text>
                    <Button
                      rounded
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "2%"
                      }}
                    >
                      <Text style={{ color: "white" }}>Rehire</Text>
                    </Button>
                    <Button
                      rounded
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Text style={{ color: "white" }}>Profile</Text>
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Text style={{ color: "black", flex: 3 }}>
                      Prasad Mulam
                    </Text>
                    <Button
                      rounded
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "2%"
                      }}
                    >
                      <Text style={{ color: "white" }}>Rehire</Text>
                    </Button>
                    <Button
                      rounded
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Text style={{ color: "white" }}>Profile</Text>
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Text style={{ color: "black", flex: 3 }}>
                      Mihir Chauhan
                    </Text>
                    <Button
                      rounded
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "2%"
                      }}
                    >
                      <Text style={{ color: "white" }}>Rehire</Text>
                    </Button>
                    <Button
                      rounded
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Text style={{ color: "white" }}>Profile</Text>
                    </Button>
                  </ListItem>
                </List>
              </View>
            )}
          </ScrollView>
          <View>
            <Text />
          </View>
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
