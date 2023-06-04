import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mockData from "../../data.json";
import axios from "axios";

let initialState = {
  contents: [],
  isLoading: false,
  error: "",
  theme: "",
  lang: undefined,
};

const initialTheme = () => {
  return localStorage.getItem("theme") !== null ? localStorage.getItem("theme") : "light";
};

const initialLang = () => {
  return localStorage.getItem("lang") !== null ? localStorage.getItem("lang") : navigator.language;
};

export const fetchData = createAsyncThunk("core/fetchData", async () => {
  const resp = await axios.post("https://reqres.in/api/workintech", mockData);
  return resp.data[0];
});

const coreSlice = createSlice({
  name: "core",
  initialState,
  reducers: {
    fetchLang: (state) => {
      state.lang = initialLang();
    },
    changeLang: (state, action) => {
      localStorage.setItem("lang", action.payload);
      state.lang = action.payload;
      fetchData(action.payload);
    },
    fetchTheme: (state) => {
      state.theme = initialTheme();
    },
    changeTheme: (state, action) => {
      localStorage.setItem("theme", action.payload);
      state.theme = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload[state.lang];
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default coreSlice.reducer;

export const { fetchLang, changeLang, fetchTheme, changeTheme } = coreSlice.actions;
