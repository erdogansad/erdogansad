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
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setDarkMode, toggleDarkMode, setLoading } = uiSlice.actions;
export default uiSlice.reducer;
export type { UIState };
