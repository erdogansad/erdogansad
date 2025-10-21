import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/LanguageLayout.tsx", [
    { id: "root-redirect", index: true, file: "routes/redirect.tsx" },

    route("tr", "layouts/DefaultLayoutTR.tsx", [{ id: "tr-home", index: true, file: "routes/home/home.tsx" }]),

    route("en", "layouts/DefaultLayout.tsx", [{ id: "en-home", index: true, file: "routes/home/home.tsx" }]),
  ]),
] satisfies RouteConfig;
