import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  INTERNET_STATE_CHANGED,
  SET_ACCESS_TOKEN
} from "./actionTypes";

const initialState = {
  isConnected: false,
  loading: false,
  userData: null,
  logoutLoading: false,
  accessToken: "",
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INTERNET_STATE_CHANGED:
      return {
        ...state,
        isConnected: action.payload
      };
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        userData: null,
        accessToken: "",
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload.data,
        accessToken: action.payload.accessToken,
        loading: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
