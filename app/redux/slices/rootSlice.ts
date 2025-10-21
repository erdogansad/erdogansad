import { createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialState = {
  theme: "system",
  loading: false,
  error: null,
};

const rootSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      cookies.set("theme", action.payload, { path: "/", maxAge: 31536000 });
    },
  },
});

export default rootSlice.reducer;
export const { setTheme } = rootSlice.actions;
