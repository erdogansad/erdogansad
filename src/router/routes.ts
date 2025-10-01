import { lazy } from "react";

const routes = [
  {
    path: "/",
    element: lazy(() => import("@/pages/view/Home")),
    layout: "default",
  },
  {
    path: "/status",
    element: lazy(() => import("@/pages/error/Status")),
    layout: "blank",
  },
  {
    path: "/404",
    element: lazy(() => import("@/pages/error/NotFound")),
    layout: "blank",
  },
];

export default routes;
