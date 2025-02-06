import { Suspense, lazy, LazyExoticComponent, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes";
import LoadingSpinner from "@/core/components/LoadingSpinner";
import { useAppDispatch } from "@/redux/store";
import { setDarkMode } from "@/redux/slices/uiSlice";

interface RouteObj {
  path: string;
  element: LazyExoticComponent<() => JSX.Element | undefined>;
  layout: string;
}

const LazyNavbar = lazy(() => import("@/core/layouts/Navbar"));
const LazyFooter = lazy(() => import("@/core/layouts/Footer"));

const Router = () => {
  const RenderRoute = (props: { route: RouteObj }) => {
    const { route } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
      const darkMode = localStorage.getItem("darkMode");

      if (darkMode !== undefined && darkMode !== null) {
        if (darkMode) {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.add("bg-slate-950");
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.remove("bg-slate-950");
        }
      } else {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.add("bg-slate-950");
          localStorage.setItem("darkMode", "true");
          dispatch(setDarkMode(true));
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.remove("bg-slate-950");
          localStorage.setItem("darkMode", "false");
          dispatch(setDarkMode(false));
        }
      }
    }, [dispatch]);

    if (route.layout === "default") {
      return (
        <>
          <LazyNavbar />
          <Suspense fallback={<LoadingSpinner size={16} fullpage={true} />}>
            <route.element />
          </Suspense>
          <LazyFooter />
        </>
      );
    } else if (route.layout === "blank") {
      return (
        <Suspense fallback={<LoadingSpinner size={16} fullpage={true} />}>
          <route.element />
        </Suspense>
      );
    }
  };

  const resolveRoutes = () => {
    return routes.map((route: RouteObj) => {
      return <Route key={route.path} path={route.path} element={<RenderRoute route={route} />} />;
    });
  };

  return (
    <Routes>
      {resolveRoutes()}

      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default Router;
