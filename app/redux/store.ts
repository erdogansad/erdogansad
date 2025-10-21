import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootSlice from "./slices/rootSlice";

export const createStore = () =>
  configureStore({
    reducer: {
      root: rootSlice,
    },
  });

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export const useAppDispatch = () => useDispatch<AppStore["dispatch"]>();
