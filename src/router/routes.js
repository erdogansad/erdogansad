import { lazy } from "react";

const routes = [
  {
    path: "/",
    exact: true,
    element: lazy(() => import("@pages/view/Home")),
    layout: "default",
  },
  {
    path: "/loading",
    exact: true,
    element: lazy(() => import("@components/LoadingSpinner")),
    layout: "blank",
  },
  {
    path: "/404",
    exact: true,
    element: lazy(() => import("@pages/others/NotFound")),
    layout: "blank",
  },
];

export { routes };
