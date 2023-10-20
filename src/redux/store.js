import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootSlice from "./slices/rootSlice";

export const setupStore = () => {
  return configureStore(
    {
      reducer: {
        root: rootSlice,
      },
    },
    applyMiddleware(thunk)
  );
};
