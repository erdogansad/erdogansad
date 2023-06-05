import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInterface from "@utils/tools/api";
import mockData from "../../data.json";

let initialState = {
  contents: {},
  isLoading: false,
  error: "",
  theme: "",
  lang: undefined,
};

let initialLangs = ["en", "tr"];

export const fetchData = createAsyncThunk("core/fetchData", async (lang) => {
  const resp = await axiosInterface.post("https://reqres.in/api/workintech", mockData);
  return resp.data[lang];
});

const coreSlice = createSlice({
  name: "core",
  initialState,
  reducers: {
    fetchLang: (state) => {
      let lang = navigator.language.slice(0, 2);

      state.lang = localStorage.getItem("lang") !== null ? localStorage.getItem("lang") : initialLangs.find((l) => l === lang) ? lang : "en";
    },
    changeLang: (state, action) => {
      localStorage.setItem("lang", action.payload);
      state.lang = action.payload;
    },
    fetchTheme: (state) => {
      state.theme = localStorage.getItem("theme") !== null ? localStorage.getItem("theme") : "light";
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
      state.contents = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default coreSlice.reducer;

export const { fetchLang, changeLang, fetchTheme, changeTheme } = coreSlice.actions;
