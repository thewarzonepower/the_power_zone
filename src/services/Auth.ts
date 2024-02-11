import AXIOS from "../config/Axios";
import Prefix from "../config/ApiPrefix";
import { jwtDecode } from "jwt-decode";
import SecureStorage from "../config/SecureStorage";

const Auth = {
  login(data: object, url: any) {
    return AXIOS.post(`${Prefix.api}/${url ? url : ""}`, data);
  },

  checkLogin() {
    const token = SecureStorage.getItem('token');
    if (token) {
      const decoded: any = jwtDecode(token);
      if (!!token && !this.isTokenExpired(decoded)) {
        const { username, role, isBlocked } = decoded;
        return { user: { username, role, isBlocked } };
      } else {
        return { user: {} };
      }
    } else {
      return { user: {} };
    }
  },

  async loginLogs(data: object, token: any) {
    try {
      await AXIOS.post(`${Prefix.api}/login-log`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      // Handle error appropriately
      console.error("Error logging login activity:", error);
    }
  },

  async findAccessToken(data: object) {
    try {
      const response = await AXIOS.post(`${Prefix.api}/auth/token-refresh/`, { ...data });
      return response.data.accessToken;
    } catch (error) {
      // Handle error appropriately
      console.error("Error refreshing access token:", error);
      throw error;
    }
  },

  async setProfile() {
    try {
      const response = await AXIOS.get(`${Prefix.api}/auth/profile/`, {
        headers: { Authorization: `Token ${SecureStorage.getItem("token")}` },
      });
      return response.data;
    } catch (error) {
      // Handle error appropriately
      console.error("Error fetching user profile:", error);
      throw error;
    }
  },

  isTokenExpired(decoded: any) {
    try {
      return decoded.exp < Date.now() / 1000; // Checking if token is expired.
    } catch (err: any) {
      return false;
    }
  },
};

export default Auth;
