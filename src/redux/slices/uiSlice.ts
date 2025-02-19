import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  darkMode: boolean;
  loading: boolean;
}

const initialState: UIState = {
  darkMode: false,
  loading: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
      localStorage.setItem("darkMode", action.payload.toString());

      if (action.payload) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.add("bg-slate-950");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.remove("bg-slate-950");
      }
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setDarkMode, setLoading } = uiSlice.actions;
export default uiSlice.reducer;
export type { UIState };
