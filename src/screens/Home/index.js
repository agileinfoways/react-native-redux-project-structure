import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { login } from "../../store/Auth/actions";
import styles from "./style";
import * as palettes from "../../constants/palettes";
import { ToolBar } from "atoms";
import * as utility from "../../utility";

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={palettes.safeAreaStyle}>
        <ToolBar />
        <View style={styles.container}>
          <Text
            onPress={() => {
              utility.showAlertWithCallBack("Test Message", () => {});
            }}
          >
            Home Screen
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { loading } = state.auth;
  return {
    loading
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Home);
