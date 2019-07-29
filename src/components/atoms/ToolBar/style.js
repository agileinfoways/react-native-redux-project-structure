import { StyleSheet } from "react-native";
import * as utility from "../../../utility";

export default (styles = StyleSheet.create({
  container: {
    width: "100%",
    height: utility.getOS() === "ios" ? 64 : 48,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center"
  },
  titleStyle: {
    color: "#fff"
  }
}));
