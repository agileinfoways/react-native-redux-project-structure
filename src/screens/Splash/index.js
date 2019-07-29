import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default class Splash extends Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Home");
    }, 1000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Splash Screen</Text>
      </View>
    );
  }
}
