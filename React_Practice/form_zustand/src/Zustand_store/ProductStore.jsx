/* eslint-disable no-unused-vars */

import { create } from "zustand";

// create GlobalContext with InitialData and action

const ProductStore = create((set) => ({
  // InitialState key
  data: [],
  IsLoading: false,

  // Reducer Action

  Get_request: () =>
    set((state) => ({
      IsLoading: true,
    })),

  Get_success: (product) =>
    set((state) => ({
      data: [...state.data, product],
      IsLoading: false,
    })),

  Get_fail: () =>
    set((state) => ({
      IsLoading: false,
    })),

}));

export default ProductStore;