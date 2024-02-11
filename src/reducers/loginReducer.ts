import { ACTIONS, LoginActionTypes } from '../interfaces/actionTypes/loginTypes';
import SecureStorage from "../config/SecureStorage";

// Define the initial state interface
interface LoginInitialState {
  user: object;
  status: boolean;
  success: boolean;
  otp: any;
  userDetails: Array<any>;
  passwordStatus: boolean;
  loading: boolean;
  userProfile: Array<any>;
}

// Define the initial state
const initialState: LoginInitialState = {
  user: {
    username: "",
    email: "",
    age: 0
  },
  status: false,
  success: false,
  otp: false,
  userDetails: [],
  passwordStatus: true,
  loading: false,
  userProfile: []
};

// Define the user reducer
const userReducer = (state = initialState, action: LoginActionTypes): LoginInitialState => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
        status: true
      };
    case ACTIONS.GET_USER:
      return {
        ...state,
        passwordStatus: action.payload,
        status: true
      };
    case ACTIONS.RESET_PASSWORD:
      return {
        ...state,
        success: action.payload,
      };
    case ACTIONS.SEND_OTP:
      return {
        ...state,
        otp: action.payload,
      };
    case ACTIONS.LOGOUT:
      SecureStorage.removeItem("token");
      window.location.href = '/';
      return {
        ...initialState // Reset state to initial values
      };
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case ACTIONS.GET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
        loading: false,
      };
    case ACTIONS.GET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
