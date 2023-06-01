import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => import("@pages/view/Home")),
    layout: "default",
    exact: true,
  },
  {
    path: "/404",
    component: lazy(() => import("@pages/errors/NotFound")),
    layout: "blank",
  },
];

export default routes;
