import { Suspense, lazy, LazyExoticComponent, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes";
import LoadingSpinner from "@/core/components/LoadingSpinner";
import { useAppDispatch } from "@/redux/store";
import { fetchDarkMode } from "@/redux/slices/uiSlice";

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
      dispatch(fetchDarkMode());
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
