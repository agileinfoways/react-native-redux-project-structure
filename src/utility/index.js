import { Platform, Alert } from "react-native";
import { Dimensions } from "react-native";
import * as titles from "../constants/title";

export const getDeviceWidth = () => {
  return Math.round(Dimensions.get("window").width);
};
export const getDeviceHeight = () => {
  return Math.round(Dimensions.get("window").height);
};

export const getPageLimit = () => {
  return 10;
};

export const isFieldEmpty = text => {
  if (text == "") {
    return true;
  }
  return false;
};

export const isValidEmail = email => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(email) === true) {
    return true;
  }
  return false;
};

export const isValidPhoneNumber = phoneNo => {
  if (phoneNo.length < 8) {
    return false;
  }
  return true;
};

export const isValidComparedPassword = (password, confirmPassword) => {
  if (password == confirmPassword) {
    return true;
  }
  return false;
};
export const getOS = () => {
  if (Platform.OS === "ios") {
    return "ios";
  }
  return "android";
};

export const showAlert = message => {
  Alert.alert(
    titles.APP_NAME,
    message,
    [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    { cancelable: false }
  );
};

export const showAlertWithCallBack = (msg, onOkClick) => {
  Alert.alert(
    "",
    msg,
    [
      {
        text: "OK",
        onPress: () => {
          console.log(" CLICK CALLED ");
          onOkClick();
        }
      }
    ],
    {
      cancelable: false
    }
  );
};
