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
    },
    toggleDarkMode: (state) => {
      localStorage.setItem("darkMode", (!state.darkMode).toString());
      console.log("darkMode", (!state.darkMode).toString());
      state.darkMode = !state.darkMode;
      document.body.classList.toggle("dark");
      document.body.classList.toggle("bg-slate-950");
    },
    fetchDarkMode: (state) => {
      const darkMode = localStorage.getItem("darkMode");
      if (darkMode !== undefined && darkMode !== null) {
        state.darkMode = darkMode === "true";
        if (state.darkMode) {
          document.body.classList.add("dark");
          document.body.classList.add("bg-slate-950");
        } else {
          document.body.classList.remove("dark");
          document.body.classList.remove("bg-slate-950");
        }
      } else {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          state.darkMode = true;
          document.body.classList.add("dark");
          document.body.classList.add("bg-slate-950");
          localStorage.setItem("darkMode", "true");
        } else {
          state.darkMode = false;
          document.body.classList.remove("dark");
          document.body.classList.remove("bg-slate-950");
          localStorage.setItem("darkMode", "false");
        }
      }
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setDarkMode, toggleDarkMode, fetchDarkMode, setLoading } = uiSlice.actions;
export default uiSlice.reducer;
export type { UIState };
