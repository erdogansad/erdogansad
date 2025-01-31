import { createSlice } from "@reduxjs/toolkit";

interface RootState {
  darkMode: boolean;
  whatCanIDo: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
  projects: {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string;
  }[];
}

const initialState: RootState = {
  darkMode: false,
  whatCanIDo: [
    {
      id: 1,
      title: "Kurumsal Web Çözümleri",
      description: "İhtiyaca özel, güçlü ve güvenli kurumsal web uygulamaları geliştiriyor, şirketlerin dijital dönüşüm süreçlerine destek oluyorum.",
      image: "https://dummyimage.com/16:9x360",
    },
    {
      id: 2,
      title: "İşletme Yönetim Uygulamaları",
      description: "İşletmelerin ihtiyaçlarına yönelik, kullanıcı dostu ve ölçeklenebilir yönetim uygulamaları geliştiriyorum.",
      image: "https://dummyimage.com/16:9x360",
    },
    {
      id: 3,
      title: "Mobil Uygulamalar",
      description: "Android ve iOS platformları için kullanıcı dostu, hızlı ve güvenli mobil uygulamalar geliştiriyorum.",
      image: "https://dummyimage.com/16:9x360",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Yakında",
      date: "--/--/----",
      description: "Yakında",
      image: "https://dummyimage.com/16:9x360",
    },
    {
      id: 2,
      title: "Yakında",
      date: "--/--/----",
      description: "Yakında",
      image: "https://dummyimage.com/16:9x360",
    },
    {
      id: 3,
      title: "Yakında",
      date: "--/--/----",
      description: "Yakında",
      image: "https://dummyimage.com/16:9x360",
    },
    {
      id: 4,
      title: "Yakında",
      date: "--/--/----",
      description: "Yakında",
      image: "https://dummyimage.com/16:9x360",
    },
  ],
};

const companiesSlice = createSlice({
  name: "companies",
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
  },
});

export default companiesSlice.reducer;
export type { RootState };
export const { setDarkMode, toggleDarkMode, fetchDarkMode } = companiesSlice.actions;
