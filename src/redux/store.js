import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import coreSlice from "./slices/coreSlice";
import thunk from "redux-thunk";

export const setupStore = () => {
  return configureStore(
    {
      reducer: {
        core: coreSlice,
      },
    },
    applyMiddleware(thunk)
  );
};
