import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface rootState {
  theme: string | null;
  hwSupported?: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: rootState = {
  theme: null,
  hwSupported: undefined,
  loading: false,
  error: null,
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const setTheme = createAsyncThunk("root/setTheme", async (theme: string) => {
  await wait(1000);
  return theme;
});

export const setHardwareAcceleration = createAsyncThunk("root/setHardwareAcceleration", async (isSupported: boolean) => {
  await wait(500);
  return isSupported;
});

const rootSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setTheme.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setTheme.fulfilled, (state, action) => {
        state.loading = false;
        state.theme = action.payload;
      })
      .addCase(setTheme.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to set theme";
      });
    builder
      .addCase(setHardwareAcceleration.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setHardwareAcceleration.fulfilled, (state, action) => {
        state.loading = false;
        state.hwSupported = action.payload;
      })
      .addCase(setHardwareAcceleration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to set hardware acceleration";
      });
  },
});

export default rootSlice.reducer;
export const { changeTheme } = rootSlice.actions;
