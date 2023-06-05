import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import coreSlice from "@slices/coreSlice";

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
