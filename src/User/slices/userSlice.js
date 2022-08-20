import { createSlice } from "@reduxjs/toolkit";
import request from "../../Common/helpers/request";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    isLogin: false,
    isLogout: false,
    isAuthenticated: false,
  },
  reducers: {
    initialize: (state, { payload }) => {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const token = localStorage.getItem("token");
      return { ...user, isAuthenticated: token ? true : false };
    },

    loginSuccess: (state, { payload }) => {
      return {
        ...state,
        ...payload.data,
        isLogin: true,
        isAuthenticated: true,
      };
    },
    logoutSuccess: (state, { payload }) => {
      state.isLogout = false;
      state.isAuthenticated = false;
    },
  },
});
export const { initialize, loginSuccess, logoutSuccess } = userSlice.actions;

// 登录用户
export function login(user) {
  return async (dispatch) => {
    try {
      const response = await request.post("user/login", user);

      if (response.code === 0) {
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch(loginSuccess(response));
      }
    } catch (error) {
      console.log(error);
    }
  };
}

// 注销登录
export function logout() {
  return async (dispatch) => {
    try {
      const response = await request.post("user/logout");

      if (response.code === 0) {
        localStorage.removeItem("token");
        dispatch(logoutSuccess(response));
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export const userSelector = (state) => state.user;
export default userSlice.reducer;
