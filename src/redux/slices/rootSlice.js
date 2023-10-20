import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  data: null,
  isLoading: true,
  error: null,
};

export const fetchData = createAsyncThunk("root/fetchData", async (_, { rejectWithValue }) => {
  try {
    const lang =
      localStorage.getItem("lang") ||
      (navigator.language.length > 2 ? navigator.language.slice(0, 2) : navigator.language) ||
      (navigator.userLanguage.length > 2 ? navigator.userLanguage.slice(0, 2) : navigator.userLanguage) ||
      "en";
    if (localStorage.getItem("lang") === null) localStorage.setItem("lang", lang);
    const response = await axios.get(process.env.REACT_APP_API_URL + "/portfolio/get?lang=" + lang);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default rootSlice.reducer;
