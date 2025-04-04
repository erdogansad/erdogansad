import { supabase } from "@/utils/supabase";
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
    const { data: projectsData, error: projectsError } = await supabase.from("projects").select("*");

    if (projectsError) {
      throw new Error(projectsError.message);
    }

    const { data: whatCanIDoData, error: whatCanIDoError } = await supabase.from("what_can_i_do").select("*");

    if (whatCanIDoError) {
      throw new Error(whatCanIDoError.message);
    }

    const projects = projectsData.map((project) => ({
      id: project.id,
      title: project.title_tr,
      date: project.date,
      description: project.description_tr,
      image: project.image,
    }));

    const whatCanIDo = whatCanIDoData.map((item) => ({
      id: item.id,
      title: item.title_tr,
      description: item.description_tr,
      image: item.image,
    }));

    return { projects, whatCanIDo };
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
