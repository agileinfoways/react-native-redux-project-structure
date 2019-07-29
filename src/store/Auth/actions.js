import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  INTERNET_STATE_CHANGED,
  SET_ACCESS_TOKEN
} from "./actionTypes";
import * as api from "../../constants/api";
import * as alerts from "../../constants/alerts";
import * as utility from "../../utility";
import { Alert } from "react-native";
import * as commonApi from "../commonApi";

export const changeInternetState = isConnected => {
  return dispatch => {
    returnToDispatch(dispatch, INTERNET_STATE_CHANGED, isConnected);
  };
};
export const setAccessToken = accessToken => {
  return dispatch => {
    returnToDispatch(dispatch, SET_ACCESS_TOKEN, accessToken);
  };
};

export const login = () => {
  return dispatch => {
    const API = api.BASE_URL + api.LOGIN_URL;
    returnToDispatch(dispatch, LOGIN_REQUEST);
    headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Token": ""
    };
    commonApi
      .postDataApi(API, "", "", headers)
      .then(response => {
        let payload = {};
        payload.data = "";
        payload.accessToken = "";
        returnToDispatch(dispatch, LOGIN_SUCCESS, payload);
      })
      .catch(error => {
        returnToDispatch(dispatch, LOGIN_FAILURE, error);
        handleError(error, dispatch);
      });
  };
};

resetAsyncData = dispatch => {
  //reset async data and navigate to login screen
};

handleError = (error, dispatch) => {
  setTimeout(() => {
    if (error.response) {
      if (error.response.status === 401) {
        Alert.alert("", alerts.UNAUTHENTIC_USER, [
          {
            text: "Ok",
            onPress: () => resetAsyncData(dispatch)
          }
        ]);
      }
    } else if (error.message) {
      utility.showAlert(error.message);
    } else {
      utility.showAlert(JSON.stringify(error));
    }
  }, 500);
};
returnToDispatch = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload
  });
};
