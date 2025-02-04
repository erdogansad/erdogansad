import { configureStore, Tuple } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { useDispatch } from "react-redux";
import rootSlice from "./slices/rootSlice";
import uiSlice from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    root: rootSlice,
    ui: uiSlice,
  },
  middleware: () => new Tuple(thunk),
});

export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
