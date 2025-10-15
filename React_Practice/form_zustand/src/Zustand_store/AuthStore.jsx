/* eslint-disable no-unused-vars */

import { create } from "zustand";

// create GlobalContext with InitialData and action

const GlobalInfo = create((set) => ({
  // InitialState key
  Access_Token: null,
  IsAuth: false,
  IsLoading: false,
  username:"",

  // Reducer Action

  login_request: () =>
    set((state) => ({
      IsAuth:false,
      IsLoading: true,
    })),

  login_success: (token, name) =>
    set((state) => ({
      Access_Token: token,
      IsAuth: true,
      IsLoading: false,
      username:name
    })),

  login_fail: () =>
    set((state) => ({
      IsAuth: false,
      IsLoading: false,
    })),

  logout: () =>
    set((state) => ({
      Access_Token: null,
      IsAuth: false,
      IsLoading: false,
    })),
}));

export default GlobalInfo;