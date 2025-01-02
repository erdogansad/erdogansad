import { lazy } from "react";

interface RouteType {
  path: string;
  element: React.ComponentType<{ className?: string }>;
  protected?: boolean;
  layout: string;
}

const routes: RouteType[] = [
  {
    path: "/",
    element: lazy(() => import("@/pages/view/Home")),
    layout: "default",
  },
  {
    path: "/404",
    element: lazy(() => import("@/pages/others/NotFound")),
    layout: "blank",
  },
];

export { routes };
export type { RouteType };
