import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface RootState {
  data: {
    whatCanIDo:
      | {
          id: number;
          title: string;
          description: string;
          image: string;
        }[]
      | null;
    projects:
      | {
          id: number;
          title: string;
          date: string;
          description: string;
          image: string;
        }[]
      | null;
    loading: boolean;
    error: string | null;
  };
}

const initialState: RootState = {
  data: {
    whatCanIDo: null,
    projects: null,
    loading: false,
    error: null,
  },
};

export const fetchData = createAsyncThunk("companies/fetchData", async (_, { rejectWithValue }) => {
  try {
    const resp = await fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!resp.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await resp.json();

    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data.loading = false;
        state.data.error = null;
        state.data.whatCanIDo = action.payload.whatCanIDo;
        state.data.projects = action.payload.projects;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.data.loading = false;
        state.data.error = action.payload as string;
      });
  },
});

export default companiesSlice.reducer;
export type { RootState };
