import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { decryptData } from "@/utils/tools";

interface RootState {
  data: {
    about: string[];
    langs: { id: number; title: string; code: string }[];
    other_texts: string[];
    page_titles: { title: string; el_id: string }[];
    projects: { data: string; image: string; github: string; live: string }[];
    skills: { id: number; name: string; icon: string }[];
    socials: { id: number; title: string; url: string; icon: string; second_icon: string }[];
  } | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: RootState = {
  data: null,
  isLoading: true,
  error: null,
};

export const fetchData = createAsyncThunk("root/fetchData", async (_, { rejectWithValue }) => {
  try {
    const lang = localStorage.getItem("lang") || (navigator.language.length > 2 ? navigator.language.slice(0, 2) : navigator.language) || "en";
    if (localStorage.getItem("lang") === null) localStorage.setItem("lang", lang);
    const response = await axios.get(import.meta.env.VITE_API_URL + "/portfolio/get?lang=" + lang);

    let decrypted = decryptData(response.data);
    decrypted = JSON.parse(decrypted as string);

    return decrypted;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(error.response.data);
    } else {
      return rejectWithValue("An unknown error occurred");
    }
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
        state.data = action.payload as unknown as RootState["data"];
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default rootSlice.reducer;
export type { RootState };
