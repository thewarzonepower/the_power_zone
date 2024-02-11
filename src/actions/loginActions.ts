import Auth from '../services/Auth';
import SecureStorage from '../config/SecureStorage'
import { snackBarUpdate } from './snackBarActions';
import { ACTIONS } from '../interfaces/actionTypes/loginTypes';
import AXIOS from '../config/Axios';
import Prefix from '../config/ApiPrefix';
import { jwtDecode } from "jwt-decode";
export const login = (body: any,url:any) => async (dispatch: Function) => {
  dispatch({ type: ACTIONS.SET_LOADING, payload: true })
  try {
    const {
      data,
      status
    } = await Auth.login(body,url);
    let authResponse: any = [];

    if (status === 200 || status === 201) {
      authResponse = {
        data,
        status
      };
      const body2={
        applicationName:"ticketTrails"
      }
      await Auth.loginLogs(body2,data.access_token)
      const decoded: any = jwtDecode(data.access_token);
      const user = decoded;
      const token = data.access_token;
      // const passwordStatus=data.user.password_change
      SecureStorage.setItem('token', token);
      SecureStorage.setItem('username', decoded.agentName);
      SecureStorage.setItem('designation', decoded.designationName);
      SecureStorage.setItem('role', decoded.role);
      SecureStorage.setItem('advisorId', decoded.advisorId);
      SecureStorage.setItem('userType', decoded.userType);
      SecureStorage.setItem('emailid', decoded.email);
      SecureStorage.setItem('channel', decoded.channel);
      // dispatch({type: ACTIONS.GET_USER, payload: passwordStatus })
      dispatch({ type: ACTIONS.GET_USER_PROFILE, payload: decoded })
      dispatch({ type: ACTIONS.SET_USER, payload: decoded })
      dispatch({ type: ACTIONS.SET_LOADING, payload: false })
    }
    return authResponse;
  } catch (err: any) {


    let title = ''
    if (err.response) {
      const { status } = err.response
      if (status === 400) {
        title = String(err.response.data.message)
      } else if (status === 401) {
        title = String(err.response.data.message)
      }
      else if(err.response.data===undefined){
        title="ERR_INTERNET_DISCONNECTED,Checking the network cables, modem and router Reconnecting to Wi-Fi"
      }
    }

    snackBarUpdate({

      payload: {
        message: title || "Something went wrong",
        status: true,
        type: 'error',
      },
    })(dispatch);
    dispatch({ type: ACTIONS.SET_LOADING, payload: false })
    throw err;
  }
};
export const updateAgentPassword = (body: any) => async (dispatch: Function) => {
  try {
    const { data } = await AXIOS.post(`${Prefix.api}/agents/updatePassword/`, body, {
      headers: { Authorization: `Bearer ${SecureStorage.getItem("token")}` },
    });
    dispatch({
      type: ACTIONS.UPDATE_AGENT_PASSWORD,
      payload: data,
    });
  } catch (err: any) {
    let title = "";
    if (err.response) {
      if (err.response.data.message === "Unauthorized") {
        dispatch(logout());
      }
      title = err.response.data.message === undefined ? err.response.data.error : String(err.response.data.message);
    } else {
      title = "Something went wrong!";
    }
    snackBarUpdate({
      payload: {
        message: title || "Something went wrong",
        status: true,
        type: "error",
      },
    })(dispatch);
    dispatch({ type: ACTIONS.SET_LOADING, payload: false });
    throw err;
  }
};
export const changePassword = (body: any) => async (dispatch: Function) => {
  dispatch({ type: ACTIONS.SET_LOADING, payload: true });
  try {
      const { data } = await AXIOS.put(`${Prefix.api}/users/forgot-password/`, body, {
          headers: { Authorization: `Bearer ${SecureStorage.getItem("token")}` },
      });
      dispatch({
          type: ACTIONS.CHANGE_USER_PASSWORD,
          payload: data,
      });
      snackBarUpdate({
          payload: {
              message: "Password Change Successfully",
              status: true,
              type: "success",
          },
      })(dispatch);
  } catch (err: any) {
      let title = "";
      if (err.response) {
          title = err.response.data.message===undefined?err.response.data.error: String(err.response.data.message);
      } else {
          title = "Something went wrong!";
      }
      snackBarUpdate({
          payload: {
              message: title || "Something went wrong",
              status: true,
              type: "error",
          },
      })(dispatch);
      dispatch({ type: ACTIONS.SET_LOADING, payload: false });
      throw err;
  }
};
export const getFirebaseNotification = (body: any) => async (dispatch: Function) => {
  dispatch({ type: ACTIONS.SET_LOADING, payload: true });
  try {
    const { data } = await AXIOS.post(`${Prefix.api}/notification/token_save/`,
      body,
      { headers: { Authorization: `Token ${SecureStorage.getItem("token")}` } }
    );
    dispatch({ type: ACTIONS.GET_FIREBASE_NOTIFICATION, payload: data });
  } catch (err: any) {
    let title = "";
    if (err.response) {
      title = err.response.data.message;
    } else {
      title = "Something went wrong!";
    }
    snackBarUpdate({
      payload: {
        message: title || "Something went wrong!",
        status: true,
        type: "error",
      },
    })(dispatch);
    dispatch({ type: ACTIONS.SET_LOADING, payload: false });
    throw err;
  }
};

export const resetPasswordReset = () => async (dispatch: Function) => {
  dispatch({ type: ACTIONS.RESET_PASSWORD, payload: false });
  dispatch({ type: ACTIONS.SEND_OTP, payload: false });
}

export const resetPassword = (body: any) => async (dispatch: Function) => {
  dispatch({ type: ACTIONS.SET_LOADING, payload: true });
  try {
    const { data } = await AXIOS.post(`${Prefix.api}/auth/password_reset/confirm/`,
      body,
    );
    dispatch({ type: ACTIONS.RESET_PASSWORD, payload: data });
    dispatch({ type: ACTIONS.SET_LOADING, payload: false });
  } catch (err: any) {
    let title = "";
    if (err.response) {
      title = err.response.data.message;
    } else {
      title = "Something went wrong!";
    }
    snackBarUpdate({
      payload: {
        message: title || "Something went wrong!",
        status: true,
        type: "error",
      },
    })(dispatch);
    dispatch({ type: ACTIONS.SET_LOADING, payload: false });
    throw err;
  }
};
export const getUserDetails = (url: string) => async (dispatch: Function) => {
  dispatch({ type: ACTIONS.SET_LOADING, payload: true });
  try {
    const { data } = await AXIOS.get(`${Prefix.api}/auth/shortprofile/`, {
      headers: { Authorization: `Token ${SecureStorage.getItem("token")}` },
    });
    dispatch({ type: ACTIONS.GET_USER_DETAILS, payload: data });
  } catch (err: any) {
    let title = "";
    if (err.response) {
      title = err.response.data.message;
    } else {
      title = "Something went wrong!";
    }
    snackBarUpdate({
      payload: {
        message: title || "Something went wrong!",
        status: true,
        type: "error",
      },
    })(dispatch);
    dispatch({ type: ACTIONS.GET_USER_DETAILS, payload: [] });
    dispatch({ type: ACTIONS.SET_LOADING, payload: false });
    throw err;
  }
};
export const panelUserLogout = () => async (dispatch: Function) => {

  dispatch({ type: ACTIONS.SET_LOADING, payload: true });
  try {
    const { data } = await AXIOS.post(`${Prefix.api}/auth/users/paneluser/logout/`,
      {},
      { headers: { Authorization: `Token ${SecureStorage.getItem("token")}` } }
    );
    dispatch({ type: ACTIONS.PANELUSER_LOGOUT, payload: data });
    dispatch({ type: ACTIONS.SET_LOADING, payload: false });
  } catch (err: any) {
    let title = "";
    if (err.response) {
      title = err.response.data.message;
    } else {
      title = "Something went wrong!";
    }
    snackBarUpdate({
      payload: {
        message: title || "Something went wrong!",
        status: true,
        type: "error",
      },
    })(dispatch);
    dispatch({ type: ACTIONS.SET_LOADING, payload: false });
    throw err;
  }
};

export const sendOtp = (body: any,url:any) => async (dispatch: Function) => {
  dispatch({ type: ACTIONS.SET_LOADING, payload: true });
  try {
    const { data } = await AXIOS.post(`${Prefix.api}/otp-service/${url?url:""}`,
      body,
    );
    dispatch({ type: ACTIONS.SEND_OTP, payload: data });
    dispatch({ type: ACTIONS.SET_LOADING, payload: false });
  } catch (err: any) {
    let title = "";
    if (err.response) {
      title = err.response.data.error;
    } else {
      title = "Something went wrong!";
    }
    snackBarUpdate({
      payload: {
        message: title || "Something went wrong!",
        status: true,
        type: "error",
      },
    })(dispatch);
    dispatch({ type: ACTIONS.SET_LOADING, payload: false });
    throw err;
  }
};

export const logout = () => ({ type: ACTIONS.LOGOUT })

export const checkUser = () => async (dispatch: Function) => {

  try {
    const data = await Auth.checkLogin();
    let checkUserLoginResponse;

    if (Object.keys(data.user).length > 0) {
      checkUserLoginResponse = data;
      dispatch({ type: ACTIONS.SET_USER, payload: data });
    }
    return checkUserLoginResponse;
  } catch (error) {
    return error;
  }
};

export const setProfile = () => async (dispatch: Function) => {
  dispatch({ type: ACTIONS.SET_LOADING, payload: true });
  try {
    const { data } = await Auth.setProfile();
    dispatch({ type: ACTIONS.SET_PROFILE, payload: data });
  } catch (error) {
  }
};

export const refreshToken = () => async (dispatch: Function) => {
  dispatch({ type: ACTIONS.SET_LOADING, payload: true })
  const rtoken = SecureStorage.getItem('refreshToken');
  try {
    const {
      data,
      status
    } = await Auth.findAccessToken({ refresh: rtoken });
    let authResponse: any = [];
    if (status === 200 || status === 201) {
      authResponse = {
        data,
        status
      };
      const accessToken = data.access;
      SecureStorage.setItem('accessToken', accessToken);
      return authResponse;
    } else if (status === 401) {
      return "logout";
    } else {
      return "logout";
    }
  } catch (err: any) {
    return "logout";
  }
};