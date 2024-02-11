export const ACTIONS = {
  CHANGE_PASSWORD: "change_password",
  SET_USER: 'login/set_user',
  LOGOUT: 'login/logout',
  SET_PROFILE: "login/set_profile",
  RESET_PASSWORD: "login/reset_password",
  SEND_OTP: "login/send_otp",
  SET_LOADING: 'login/set_loading',
  PANELUSER_LOGOUT: 'login/paneluser_logout',
  GET_FIREBASE_NOTIFICATION: 'login/get_leads',
  GET_USER_DETAILS: "login/get_user_details",
  GET_USER: "login/get_user_data",
  GET_USER_PROFILE: "login/get_user_profile",
  CHANGE_USER_PASSWORD: "login/change_user_password",
  GET_USER_BLOCK: "login/user_block_state",
  UPDATE_AGENT_PASSWORD: "login/update_login_password",
};

export interface SetUser {
  type: typeof ACTIONS.SET_USER;
  payload: Array<string | number>; // Adjust the payload type according to your data structure
}

export interface GetUserDetails {
  type: typeof ACTIONS.GET_USER_DETAILS;
  payload: Array<any>; // Adjust the payload type according to your data structure
}

export interface GetUser {
  type: typeof ACTIONS.GET_USER;
  payload: Array<any>; // Adjust the payload type according to your data structure
}

export interface GetUserBlock {
  type: typeof ACTIONS.GET_USER_BLOCK;
  payload: Array<any>; // Adjust the payload type according to your data structure
}

export interface Logout {
  type: typeof ACTIONS.LOGOUT;
  payload: any; // Adjust the payload type according to your data structure
}

export interface PanelUserLogout {
  type: typeof ACTIONS.PANELUSER_LOGOUT;
  payload: any; // Adjust the payload type according to your data structure
}

export interface ChangeUserPassword {
  type: typeof ACTIONS.CHANGE_USER_PASSWORD;
  payload: Array<any>; // Adjust the payload type according to your data structure
}

export interface SetProfile {
  type: typeof ACTIONS.SET_PROFILE;
  payload: object; // Adjust the payload type according to your data structure
}

export interface ResetPassword {
  type: typeof ACTIONS.RESET_PASSWORD;
  payload: object; // Adjust the payload type according to your data structure
}

export interface FireBaseToken {
  type: typeof ACTIONS.GET_FIREBASE_NOTIFICATION;
  payload: object; // Adjust the payload type according to your data structure
}

export interface SendOTP {
  type: typeof ACTIONS.SEND_OTP;
  payload: object; // Adjust the payload type according to your data structure
}

export interface SetLoading {
  type: typeof ACTIONS.SET_LOADING;
  payload: boolean;
}

export interface GetUserProfile {
  type: typeof ACTIONS.GET_USER_PROFILE;
  payload: Array<string | number>; // Adjust the payload type according to your data structure
}

export interface UpdateUserPassword {
  type: typeof ACTIONS.UPDATE_AGENT_PASSWORD;
  payload: Array<string | number>; // Adjust the payload type according to your data structure
}

// Define the union type for all login action types
export type LoginActionTypes =
  | SetUser
  | GetUserDetails
  | GetUser
  | GetUserBlock
  | Logout
  | PanelUserLogout
  | ChangeUserPassword
  | SetProfile
  | ResetPassword
  | FireBaseToken
  | SendOTP
  | SetLoading
  | GetUserProfile
  | UpdateUserPassword;
